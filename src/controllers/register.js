'use strict';

const router = require('express').Router();
const User = require('../models/user');


router.post('/', function (req, res, next){
  var user = new User({})

  user.save().then(function (response){
    console.log('User saved! Response:', response);
  }).catch(function (err) {
    console.log('Something went wrong. Error: ', err);
  });

  next();

});

module.exports = router;
