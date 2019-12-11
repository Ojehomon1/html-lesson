var express = require('express');
var router = express.Router();

let data = {
  userlist : ['Waleska', 'Romal', 'Madieh', 'Ahmad', 'Ali', 'Wisam', 'Farhan', 'Peter', 'Natalie', 'Rania']
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', data);
});

module.exports = router;
