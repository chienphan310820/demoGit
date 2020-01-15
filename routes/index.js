var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chien Phannnnn',test:'cục cứt' });
});

module.exports = router;
