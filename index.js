const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');
const config = require('./config/key');
const User = require('./models/User');

// mongodb
mongoose
  .connect(config.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log(`MongoDB connected!`))
  .catch(err => console.log(err));

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
  });
});

app.get('/', (req, res) => {
  res.json({ 'hello ~': 'Hi ~~' });
});

app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });

    return res.status(200).json({ success: true, userData: doc });
  });
});

app.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: 'Login failed, email not found',
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: 'Wrong password' });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie('authExp', user.tokenExp);
        res.cookie('authToken', user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

app.listen(5000);
