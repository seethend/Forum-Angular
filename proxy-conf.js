const PROXY_CONFIG = {
  "/v1/secured/*": {
      "target": "http://localhost:8080",
      "secure": false,
      "changeOrigin": true,
      "logLevel": "debug"
  },
  "/login" : {
      "target": "http://localhost:8080",
      "secure": false,
      "changeOrigin": true,
      "logLevel": "debug"
  },
  "/v1/jsonsignup" : {
    "target": "http://localhost:8080",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}

module.exports = PROXY_CONFIG;
