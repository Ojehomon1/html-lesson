const fs = require('fs');
const path = require('path');

function Create(data){
    let [name,age,hobby] =  data;
    const dirname = path.dirname(__filename)
    console.log(dirname)
    
    // let info = {
    //     name: 'peter',
    //     age: 28,
    //     hobby: 'Sports'}
    let info = {
        name: name,
        age: age,
        hobby: hobby
    }
        
    let foldername = dirname + '/' + info.name;
    console.log('Foldername' + foldername);
    
    //fs.mkdir(foldername,(err)=>{function()})
    if(!fs.existsSync(foldername)){
        fs.mkdir(foldername, { recursive: true }, (err) => {
        if (err){
         throw err;
        } else {
            console.log('Folder created')
        }
      });
    }
    else {
        console.log('Nothing created');
    }
    
    let filename = 'info.json'
    let filepath = path.join(foldername,'info.json');
    let content = JSON.stringify(info)
    console.log(filepath)
    
    fs.writeFile(filepath,content,(err)=>{
        if(err)
         {throw err;
    }else {
        console.log('File created')
    }
    })
    
}

module.exports = Create;