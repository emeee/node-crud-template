'use strict';

const router = require('express').Router();

const registerController = require('../controllers/register');
const loginController = require('../controllers/login');
const userController = require('../controllers/user');


router.use('/register', registerController);
router.use('/login', loginController);
router.use('/user', userController);


module.exports = router;
