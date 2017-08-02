var express = require('express');
var router = express.Router();
var selectd = require('../database/db.js').selectd


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/selectd', function(req, res, next) {
  selectd(req, res, next);
});

module.exports = router;
