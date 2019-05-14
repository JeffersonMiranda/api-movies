var express = require('express');
var indexRouter = require('./routes/index');
var cors = require('cors');
var app = express();

app.use(cors());
app.use('/', indexRouter);

module.exports = app;
