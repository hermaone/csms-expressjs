var express = require('express');
var router = express.Router();
var MstQuestionController = require('../controllers/mstquestion.controller'); // Import controller

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a Question');
});

router.get('/GetAll', MstQuestionController.getAllQuestions);


module.exports = router;