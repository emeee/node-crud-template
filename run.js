'use strict';

var express = require('express');
var routes = require('./src/routes');
var cors = require('cors');
var mongoose = require('mongoose');
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

/**
 * Mongodb connection.
 */
mongoose.connect('mongodb://admin:admin123@ds125684.mlab.com:25684/node-crud-template', {useNewUrlParser: true})
    .then(function() {
        console.log('Database connected!')
    })
    .catch(function(err) {
        console.error('Unable to connect to the server. Please start the server. Error', err);
});

app.listen(port)
console.log('======\nBackend running on port %s\n======', port);

module.exports = app;