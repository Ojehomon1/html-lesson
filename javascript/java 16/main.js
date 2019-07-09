

document.getElementById("link").accessKey="g";

// in firefox + chrome alt + shift + g

let akey= document.getElementById("link").accessKey;

console.log(akey); // g

let htmllink = document.querySelector("button");
let img = document.querySelector("img")


htmllink.addEventListener("click",function(){

    img.style.display="none";
} );


// with Arrow function

htmllink.addEventListener("click",()=>{

    img.style.display="none";
} );

/*
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
 
        color += letters[Math.floor(Math.random() * 16)];
 
    }
 
    return color;
 
 }
 */