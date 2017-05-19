const https = require('https');
const express = require('express');
//const path = require('path');
//const favicon = require('serve-favicon');
//const logger = require('morgan');
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');

const config = require('./config');
const replier = require('./replier');
const actionBasic = require('./actions/basic');
//var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());

app.get('/hook', function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>SCHS LINE BOT</h1><br><h2>ddugi1214@naver.com</h2>');
});

app.post('/hook', function (request, response) {
    var eventObj = request.body.events[0];
    var source = eventObj.source;
    var message = eventObj.message;

    console.log('================', new Date(), '================');
    console.log('[request]', request.body);
    console.log('[request source]', eventObj.source);
})
/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/