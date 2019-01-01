var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  first_name:  String,
  last_name: String,
  username:   String,
  password: String,
  date: { type: Date, default: Date.now },
  is_admin: { type: Boolean, default: false }
});

var User = mongoose.model('User', userSchema)

module.exports = User;

