const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://freeflow-two-point-o.herokuapp.com/',
      changeOrigin: true,
    })
  );
};