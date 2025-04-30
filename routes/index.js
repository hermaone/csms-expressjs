var express = require('express');
var app = express.Router();
var db = require('../db');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM mstquestions');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = app;
