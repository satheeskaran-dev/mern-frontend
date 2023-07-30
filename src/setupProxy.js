const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: "http://localhost:8000",
      // target: "http://ec2-43-204-150-65.ap-south-1.compute.amazonaws.com",
      changeOrigin: true,
    })
  );
};
