const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api/v1/auth', {target: 'http://localhost:5000'}));

};