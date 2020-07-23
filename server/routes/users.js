const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { register, login, logout } = require('../controllers/userController');

router.get('/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
  });
});

router.post('/register', register);

router.post('/login', login);

router.get('/logout', auth, logout);

module.exports = router;
