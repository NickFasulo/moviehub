const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');

router.get(
  '/',
  passport.authenticate('jwt-user', { session: false }),
  function (req, res, next) {
    console.log(req.user);
    res.send('From User')
  }
);

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
