// import the module
var express = require ('express');
//init the app
var app = express();


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
});

var state = {
    'state': 'Hamburg',
    'capital': 'Hamburg'}


// define routes
app.get('/', function(req, res){
    res.send('Hello World');
});

// state route
app.get('/states', function(req, res) {
   var state = {
       'state': 'Hamburg',
       'capital': 'Hamburg'
   }
   res.send(state);
});

 
//listening
app.listen(3000, function(){
    console.log("Example app started...");
});


