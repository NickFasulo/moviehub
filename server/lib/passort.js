const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/User');

const keys = process.env.JWT_USER_SECRET_KEY;

const jwtOpts = {};

jwtOpts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOpts.secretOrKey = keys;

const userJWTLoginStrategy = new JwtStrategy(
  jwtOpts,
  async (payload, done) => {}
);

module.exports = userJWTLoginStrategy;
