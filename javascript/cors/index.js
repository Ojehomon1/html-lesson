// import the module
var express = require ('express');
//init the app
var app = express();

// define routes
app.get('/', function(req, res){
    res.send('Hello World again and again!');
});

//listening
app.listen(3000, function(){
    console.log("Example app started... Hello again testing");
});


