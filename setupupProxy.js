// setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // The path you want to proxy
    createProxyMiddleware({
      target: 'https://api.sandbox.co.in',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the /api prefix when forwarding the request
      },
      headers: {
        accept: 'application/json',
        'x-api-key': apiKey,
        'x-api-secret': apiSecret,
        'x-api-version': '1.0',
      },
    })
  );
};
