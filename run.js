'use strict';

const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')

// .env file
dotenv.config()

const port = 9000;

const app = express();

app.use(bodyParser.json())

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

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const mongodb_url = 'mongodb://'+DB_USER+':'+DB_PASS+'@'+DB_HOST+':'+DB_PORT+'/'+DB_NAME;

mongoose.connect(mongodb_url, {useNewUrlParser: true})
    .then(function() {
        console.log('Database connected!')
    })
    .catch(function(err) {
        console.error('Unable to connect to the server. Please start the server. Error', err);
});

app.listen(port)
console.log('======\nBackend running on port %s\n======', port);

module.exports = app;