//## we have array of colors and we have button
//## when I click on the button then the background color of the body will change inside array
//## after the last element of the array we will start again.

let colors= ["red","orange","blue","green","yellow","pink"];
let counter=0;
function bgColorChg(){
    let body= document.querySelector("body");
    body.style.backgroundColor=colors[counter];
    counter++; 

    if(counter>=colors.length){ 
        counter=0;   // to start from the first element again
    }

}

