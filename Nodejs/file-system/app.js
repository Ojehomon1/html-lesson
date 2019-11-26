const fs=require('fs');

let fileExistPath = './index.html';
let missingFilePath = './404.html';

// how to read file using Node.Js console:
fs.readFile(fileExistPath,'utf8', (err,data)=>{
    if(err) throw err;
    //console.log(data);
    console.log('First: the data has been read');
}); //it will return a buffer
console.log('Second: after the reading');

//sync

let data = fs.readFileSync(fileExistPath, 'utf8');
//console.log(data);
console.log(data);
console.log('this is after file read function SYNC');

// 

