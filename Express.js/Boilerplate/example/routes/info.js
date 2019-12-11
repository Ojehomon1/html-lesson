var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.send('<h1>info page</h1>')
  res.sendFile(path.join(__dirname, '../public/info.html'))
});

module.exports = router;
