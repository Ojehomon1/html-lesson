let images = document.querySelectorAll("img");
let leftArr = document.querySelector(".left");
let rightArr = document.querySelector(".right");

let counter = 0;
leftArr.addEventListener("click",moveLeft);
rightArr.addEventListener("click",moveRight);

function moveLeft(){
    counter --;
    // if(counter==images.length){
    //     counter = 0;
    //}
}

function moveRight(){
    counter ++;
    if(counter==images.length){
        counter = 0;
    }
}