const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://Nick:Olusaf1!@cluster0.6rqrk.mongodb.net/Cluster0?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log(`MongoDB connected!`))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(5000);
