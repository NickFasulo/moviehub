const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./models/User');

mongoose
  .connect(
    'mongodb+srv://Nick:Olusaf1!@cluster0.6rqrk.mongodb.net/Cluster0?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log(`MongoDB connected!`))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register', (req, res) => {
  let user = new User(); // TypeError: User is not a constructor
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;

  user.save((err) {
    if (err) return next(err);
    res.json('Registered user');
  });
});

app.listen(5000);
