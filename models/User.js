const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const moment = require('moment');
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

UserSchema.methods.comparePassword = function (unhashedPW, callback) {
  bcrypt.compare(unhashedPW, this.password, function (err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

UserSchema.methods.generateToken = function (callback) {
  var user = this;
  console.log('user:', user);
  console.log('userSchema:', userSchema);
  var token = jwt.sign(user._id.toHexString(), 'secret');
  var oneHour = moment().add(1, 'hour').valueOf();

  user.token = token;
  user.tokenExp = oneHour;
  user.save(function (err, user) {
    if (err) return callback(err);
    callback(null, user);
  });
};

// generate new hashed pw before saving to database
UserSchema.pre('save', function (next) {
  var user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

module.exports = mongoose.model('User', UserSchema);
