var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = req.query
  res.render('board', { title: 'Board Display', query:query });
  console.log(`rows ${query.rows}`)
  console.log(`cols ${query.cols}`)
});

module.exports = router;
