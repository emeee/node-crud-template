'use strict';

const router = require('express').Router();

const registerController = require('../controllers/register');
const loginController = require('../controllers/login');

router.use('/register', registerController);
router.use('/login', loginController);

module.exports = router;
