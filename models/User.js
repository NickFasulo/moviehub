const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

UserSchema.pre('save', function (next) {
  var user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next()
      });
    });
  } else {
    next();
  }
});

module.exports = mongoose.model('User', UserSchema);
