# API COMMANDS

# Set WebHook
curl -F "url=https://<my-telegram-bot-url>/new-message"  https://api.telegram.org/bot<your_api_token>/setWebhook

curl -F "url=https://3a82a608.ngrok.io/new-message"  https://api.telegram.org/bot737119715:AAFzzWkJP6tQtGAoxzocILSNTdhID0kw7BE/setWebhook

curl -F "url=https://35554fe4.ngrok.io/new-message"  https://api.telegram.org/bot737119715:AAFzzWkJP6tQtGAoxzocILSNTdhID0kw7BE/setWebhook

# Get Webhookk
curl https://api.telegram.org/bot737119715:AAFzzWkJP6tQtGAoxzocILSNTdhID0kw7BE/getWebhookInfo

# Delete Webhook
curl https://api.telegram.org/bot737119715:AAFzzWkJP6tQtGAoxzocILSNTdhID0kw7BE/deleteWebhook

# Send Message
curl -X POST \
     -H 'Content-Type: application/json' \
     -d '{"chat_id": "841606593", "text": "This is a test from curl", "disable_notification": true}' \
     https://api.telegram.org/bot737119715:AAFzzWkJP6tQtGAoxzocILSNTdhID0kw7BE/sendMessage


