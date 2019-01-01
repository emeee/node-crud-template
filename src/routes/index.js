'use strict';

const router = require('express').Router();

const registerController = require('../controllers/register');

router.use('/register', registerController);

module.exports = router;
