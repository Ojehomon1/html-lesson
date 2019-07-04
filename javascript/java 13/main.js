
let p = document.getElementById('colorCode');
let div = document.getElementById('myColor');


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    p.innerHTML = color;
    div.style.background = color;

}

/* Alternative solution without using for-loop
function changeColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    document.getElementById("col").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
*/