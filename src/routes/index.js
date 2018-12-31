'use strict';

/**
 * Get an instance of Express's Router.
 */
const router = require('express').Router();

const LoginController = require('../controllers/login');

router.use('/login', LoginController);

module.exports = router;
