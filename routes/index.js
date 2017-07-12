var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  let x = 'Let variables do not work in old versions of node';
  console.log(x);
  res.render('index', { title: 'Express' });
});

module.exports = router;
