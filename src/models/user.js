const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name:  String,
  last_name: String,
  username:   String,
  password: String,
  date: { type: Date, default: Date.now },
  is_admin: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema)

module.exports = User;

