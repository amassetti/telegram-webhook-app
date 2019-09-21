module.exports = {
  port: process.env.PORT || 3001,
  env: process.env.ENV || 'dev',
  telegram: {
    api_token: process.env.API_TOKEN || '737119715:AAFzzWkJP6tQtGAoxzocILSNTdhID0kw7BE'
  },
  ngrok: {
  	tunnel_auth_token: '1R71ON3wv1mjcXBga2d5AU2bZUt_32TaSbfmnhoFuCX7qqMmK',
    app_url: process.env.APP_URL || 'https://debebd13.ngrok.io'
  }
};
