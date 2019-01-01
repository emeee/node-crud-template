'use strict';

const router = require('express').Router();
const User = require('../models/user');

router.post('/', function (req, res, next){
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: req.body.password,
  })

  user.save().then(function (){
    res.status(200)
  }).catch(function (err) {
    res.status(400).send('Something went wrong. Error:', err)
  });

});

module.exports = router;
