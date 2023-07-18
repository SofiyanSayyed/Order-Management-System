const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = require('./routes/route')
require('dotenv').config()
const {MONGO_STRING, PORT} = process.env;

app.use(express.json());
app.use('/', route)

mongoose.connect(MONGO_STRING, {
  useNewUrlParser: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err.message || err));

app.listen(PORT, function(){
    console.log('Server is running on port ' + PORT);
})