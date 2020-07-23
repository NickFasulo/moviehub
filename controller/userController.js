const User = require('../models/User');

module.exports = {
  register: (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
      if (err) return res.json({ success: false, err });

      return res.status(200).json({ success: true, userData: doc });
    });
  },
  login: (req, res) => {
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
  },
  logout: (req, res) => {
    User.findOneAndUpdate(
      { _id: req.user._id },
      { token: '', tokenExp: '' },
      err => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
          success: true,
        });
      }
    );
  },
};
