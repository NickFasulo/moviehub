const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    maxlength: 20,
    required: 'Username is required',
    unique: 'Username already exists',
  },
  email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required',
    unique: 'Email already exists',
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is required',
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

module.exports = mongoose.model('User', UserSchema);
