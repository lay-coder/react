const proxy = require('http-proxy-middleware')

module.exports = (app) => {
    app.use(proxy(
        '/api/',
        {
            target: process.env.devServerUri,
            changeOrign: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    ))
}