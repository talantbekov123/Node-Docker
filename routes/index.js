var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // let variables do not supported in new versions of node
  //let x = 'Let variables do not work in new versions of node';
  //console.log(x);
  res.render('index', { title: 'Express' });
});

module.exports = router;
