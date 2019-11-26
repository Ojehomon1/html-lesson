const path = require('path');
const fs = require('fs');

fs.mkdir(path.join(__dirname, './romal/cv') , (err)=> {
    if(err){
        console.log(err)
    }
    else{
        console.log('Folder created....');
    }
});

//----------------------------------------------------------------------------------
// Create a file and write inside
fs.writeFile(path.join(__dirname, '/test','hello.txt'), 'Hello DCI' , (err) => {
    if (err) {
        console.log(err)
    }
    else {
    console.log('file created....');
        }
  })

//---------------------------------------------------------------------------------
// Append text content to a file
fs.appendFile(path.join(__dirname, '/test','hello.txt'), 'I love React js' , (err) => {
    if (err) {
        console.log(err)
    }
    else {
    console.log('file created....');
        }
  })

// -------------------------------------------------------------------------------
  // Read from a file
  fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data)=>{
      if(err){
            console.log(err)
      }
      else{
            console.log(data)
      }
  })

