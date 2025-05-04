var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { swaggerUi, swaggerSpec } = require('./swagger');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var questionRoute = require('./routes/mstquestion.route');
const mstelementquestRoute = require('./routes/mstelement.route');
const mstquesttypeRoutes = require('./routes/mstquestiontype.route');
const swaggerJsDoc = require('./routes/swagger/mstquestion.swagger');
const cors = require('cors')

var app = express();
app.use(cors())

// Middleware Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/mstquestions', questionRoute);
app.use('/api/mstelementquest', mstelementquestRoute);
app.use('/api', mstquesttypeRoutes);

app.listen(4001, () => {
  console.log('Server is running on http://localhost:3000');
  console.log('Swagger docs available at http://localhost:3000/api-docs');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
