// for(let i = 0; i<15; i++){
//     process.stdout.write("*")
// }
// console.log('')
// console.log('hi')

// for(let i = 0; i<15; i++){
//     process.stdout.write("*")
// }

//---------------------------------------------------------------------------------
function print(star,header){
    let stars = '';
    for(let i = 0; i<star; i++){
        stars += '*'
    }
    console.log(stars);
    console.log(header);
    console.log(star)

}
module.exports = print