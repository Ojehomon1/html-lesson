var express = require('express');
var router = express.Router();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('data/db.json');
const db = low(adapter);
let data = db.get('records');




/* GET records listing. */
router.get('/', function(req, res, next) {
  //res.send('The dummy page for records');
  res.status(200).send(data);
});

// GET particular record using id
router.get('/:id', function (req, res){
// filtering
let item = data.filter(function (i){
  //return item.id == req.params.id
  if(i.id == req.params.id){
    return true
  }
});
res.status(200).send(item);
});

// POST a new record
router.post('/', function(req, res){
  let title = req.body.title;
  let price = req.body.price;

  //Here we obtain the array of titles (more info in the low db documentation)
  let titles = db.get('records').map('title').value()
  //This variable called repeated is false if the title not exist. if exist is true
  let repeated = false

  // To check that the new title is not duplicated
  titles.forEach(item=>{
    if (item === title){
     repeated = true
    }
  })
// check if any item with such title and price already exists

if(repeated === false ){

  //If title not exist then add it to db
  //console.log(title);
  //console.log(price);
  let count = db.get('count');
  //console.log(count)

  db.get('records').push(
    {
      id: count,
      title: title,
      price: price
    }
  ).write();

  // Increment count
  db.update('count', n => n + 1)
  .write()

  res.status(200).send('database has been updated');


}else {// If the title exist then send this message

  res.status(200).send('title already exists')}

}
);


router.post('/delete', function(req, res){
  let id = req.body.id;
  console.log(id);
  console.log()

db.get('records').remove({id: parseInt(id)}).write();
res.status(200).send('You have removed item ' + id)


});


module.exports = router;