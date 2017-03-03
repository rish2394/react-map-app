var express = require('express');
var app = express();
var api = require('./api/api');

// requiring the other global middleware
require('./middleware/middleware')(app);

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

// This middleware will server static item from public folder
app.use(express.static('./public/static'));

// This is my custom route
app.use('/api',api);

module.exports = app;
