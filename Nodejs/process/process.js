// function run(){
//     let counter = 0;
//     setInterval( () => { 
//         counter ++; 
//         console.log(counter);
//         if(counter ===100 ){
//             process.exit();
//         }
//     } , 100)
// }
// run();

//console.log(process.argv[1]);

let command = process.argv[2];
//console.log(command);
if(command === 'fly'){
    console.log('flying....');
}
else if(command === 'drive'){
    console.log('driving....');
}
else if(command==='sendemail'){
    console.log('emailing....');
}
else if (command==='backup'){
    console.log('backup is done!!!')
}
