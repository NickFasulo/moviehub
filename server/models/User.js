const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: 'Username already exists',
    required: 'Username is requred',
  },
  email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    unique: 'Email already exists',
    required: 'Email is required',
  },
  password: {
    type: String,
    required: 'Password is required',
  },
  userCreated: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('User', UserSchema);
