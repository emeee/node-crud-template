'use strict';

const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/', function (req, res, next){

  User.findOne({username: req.body.username}).then(function(user){
    const valid = bcrypt.compareSync(req.body.password, user.password)
    if (!user || !valid) return res.status(401).send('Invalid credentials');

    res.status(200).send({ status: 'OK', _id: user.id});
  }).catch(function(err) {
    res.status(400).send('Something went wrong. Error:', err);
  })

});

module.exports = router;
