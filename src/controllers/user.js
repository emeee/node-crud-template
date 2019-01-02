'use strict';

const router = require('express').Router();
const User = require('../models/user');

router.get('/all', function (req, res, next){
  User.find({}).then(function(users) {
    res.send(users);
  }).catch(function(err){
    res.status(400).send('Something went wrong. Error:', err);
  })
});

router.get('/:id', function (req, res, next){
  User.findById(req.params.id).then(function(user) {
    res.send(user);
  }).catch(function(){
    res.status(404).send('User is not founded')
  })
});

module.exports = router;
