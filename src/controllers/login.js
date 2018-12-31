'use strict';

const router = require('express').Router();

router.post('/', function (req, res, next){
  console.log('Login Requested');
});

module.exports = router;
