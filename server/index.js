const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

// MongoDB
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// parent routes
app.use('/api/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function (next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// shows the image in node js server to client
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  // index.html for all page routes
  app.get('*', res => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
