'use strict';

const router = require('express').Router();
const User = require('../models/user');

router.post('/', function (req, res, next){
  const params = {
    username: req.body.username,
    password: req.body.password
  }

  User.findOne(params).then(function(user){
    if(!user) res.status(401).send('Invalid credentials')
    res.status(200)
  }).catch(function(err) {
    res.status(400).send('Something went wrong. Error:', err)
  })

});

module.exports = router;
