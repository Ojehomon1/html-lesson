const fs = require('fs');
// this is writeStream
const file = fs.createWriteStream('file.txt');

for (let i = 0; i < 10000; i++) {
    file.write('Hello world ' + i + '\n');
}
file.end('the end...');

// this is readStream
const readable = fs.createReadStream(__dirname + '/file.txt' , {encoding:'utf8' , highWaterMark: 25 * 1024})
//Handle stream events
readable.on('data', function(chunk){
    console.log(chunk.length)
  
 
});



