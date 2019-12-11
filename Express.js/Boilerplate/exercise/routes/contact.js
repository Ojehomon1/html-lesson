var express = require('express');
var router = express.Router();

let data = {
  email: 'sebastian@gamil.com',
  address: 'Heimfield',
  phone: '12345679'
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', data);
});

module.exports = router;
