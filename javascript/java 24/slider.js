let images = [];
let time = 3000;
let i = 0;



images[0]="cats.jpg";
images[1]="dog.jpg";
images[2]="chick.jpg";
images[3]="tiger.jpg";


function changeImg(){
    console.log(i);
    console.log(images.length);
    document.querySelector("img").src=images[i];
    if(i < images.length - 1){
       i++; 
    }
    else {
        i=0;

    }

}
setInterval(changeImg,time);