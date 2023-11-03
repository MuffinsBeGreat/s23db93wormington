var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('microphone', { title: 'Search Results Microphone' });
});

module.exports = router;
