var express = require('express');
var router = express.Router();

let data = {
  userlist : ['Waleska', 'Romal', 'Madieh', 'Ahmad', 'Ali', 'Wisam', 'Farhan', 'Peter', 'Natalie']
}

/* GET about listing. */
router.get('/', function(req, res, next) {
  res.render('about', data);
});

module.exports = router;
