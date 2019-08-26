let cm=document.getElementById("cmValue");
let inch=document.getElementById("inchValue");
cm.addEventListener("keyup",cmConverter)
inch.addEventListener("keyup",inchConverter)

function cmConverter(){
    let inchResult = cm.value * 0.393701;
 console.log( inchResult);
}


function inchConverter(){
    let cmResult = inch.value * 2.54;
    console.log(cmResult);

}