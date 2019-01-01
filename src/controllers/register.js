'use strict';

const router = require('express').Router();
const User = require('../models/user');

router.post('/', function (req, res, next){
  var user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: req.body.password,
  })

  user.save().then(function (){
    console.log('User saved!');
    res.send(user);
  }).catch(function (err) {
    console.log('Something went wrong. Error: ', err);
    res.send(400)
  });

});

module.exports = router;
