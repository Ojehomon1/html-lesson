const  express  =  require('express'); 
const  router  =  express.Router(); 

const  low  =  require('lowdb') 
const  FileSync  =  require('lowdb/adapters/FileSync') 

const  adapter  =  new  FileSync('data/data.json')
const  db  =  low(adapter) 

let data = db.get('list');

// router.get('/', function(req, res, next) {
//     //res.status(200).send(data);
//     res.json(data);
//   });

// router.post('/', function(req, res, next) {
//     //res.status(200).send(data);
//     res.json(data);
//   });

router.post('/delete', function(req, res){
  let id = req.body.id;
  console.log(id);
  console.log()

db.get('records').remove({id: parseInt(id)}).write();
res.status(200).send('You have removed item ' + id)


});

module.exports = router; 