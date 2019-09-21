require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const axios = require('axios')
const ngrok = require('ngrok');
const config = require('./config');

const port = config.port;

app.use(bodyParser.json()) // for parsing application/json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send(`This is the tunnel created by Ngrok with Http Auth`);
});

app.post('/new-message', function(req, res) {
  const { message } = req.body
  //Each message contains "text" and a "chat" object, which has an "id" which is the chat id
  console.log(message);
  res.end('ok');
});

const server = app.listen(port, () => {
    console.log(`Express listening at ${server.address().port}.` );
})

// Open ngrok tunnel
if (config.env == 'dev') {
    console.log('Development environment. Opening ngrok tunnel and setting weebhook...');
    ngrok.connect({
        proto : 'http',
        addr : port
    })
        .then(url => {
            console.log('Ngrok tunnel established at url: ' + url);

            // call setWebhook api for telegram
            axios.post(
              `https://api.telegram.org/bot${config.telegram.api_token}/setWebhook`,
              {
                url: `${url}/new-message`
              }
            )
            .then(response => {
              console.log(`Webhook set in telegram: ${url}/new-message.`);
            })
            .catch(err => {
              console.log('Error trying to set webhook:', err)
            });

        })
        .catch(err => {
          console.log('Error trying to open ngrok tunnel: ', err);
        });
}