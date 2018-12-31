'use strict';

var express = require('express');
var routes = require('./src/routes');
var cors = require('cors');
var port = 9000 ;

var app = express();

app.use(cors());

/**
 * Load routes.
 */
app.use(routes);

/**
 * Error handler middleware
 */
app.use(function(err, req, res, next) { // eslint-disable-line no-unused-vars
    res.status(err.status || 500);
    res.json({
        message: err.message
    });
});


app.listen(port)
console.log('======\nBackend running on port %s\n======', port);

module.exports = app;