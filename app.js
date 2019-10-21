var express = require('express');
const es6Renderer = require('express-es6-template-engine');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexController = require('./routes/indexController');
var usersRouter = require('./routes/users');

var app = express();

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexController);
app.use('/users', usersRouter);

module.exports = app;