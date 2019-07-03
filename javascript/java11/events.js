function sayHi() {
    let name= prompt(" Hello what is your name");
    alert("hi " + name + "!!!!!!")
}
let body = document.getElementsByTagName("body")[0];
function chBgColor(){
    //let body= document.querySelector("body"); //  get the first element
    // let body = document.querySelectorAll("body")[0];
    
    body.style.backgroundColor="#ff2255";
}

function chBg(color){
    body.style.backgroundColor=color;
}
/*
//change the images with function
function chImg(){
    let img=document.getElementById("logoImg");
    
    // img.setAttribute("src","https://picsum.photos/id/1003/181/372");
    let firstImg = "https://picsum.photos/id/666/200/372";
    let secondImg = "https://picsum.photos/id/555/200/372";
    console.log(img.getAttribute("src"));
    console.log(firstImg);
    if(img.getAttribute("src")==firstImg){
      
        img.setAttribute("src",secondImg);
    }
    else {
        img.setAttribute("src",firstImg);
    }
}

//change the images randomly with function
function chImg(){
    let img=document.getElementById("logoImg");
    
    // img.setAttribute("src","https://picsum.photos/id/1003/181/372");
    let firstImg = "https://picsum.photos/id/666/200/372";
    let secondImg = "https://picsum.photos/id/555/200/372";
    console.log(img.getAttribute("src"));
    console.log(firstImg);
    if(img.getAttribute("src")==firstImg){
      
        img.setAttribute("src",secondImg);
    }
    else {
        img.setAttribute("src",firstImg);
    }
}
*/
//change the images with function
let counter = 1
function chImg(){
    let img=document.getElementById("logoImg");
    
    counter++
    
    let newScr = "https://picsum.photos/id + counter + "/300/300";
    (img.setAttribute("src", newScr);
      
    }


//change the images randomly with function
function chImg(){
    let img=document.getElementById("logoImg");
    
    // img.setAttribute("src","https://picsum.photos/id/1003/181/372");
    let firstImg = "https://picsum.photos/id/666/200/372";
    let secondImg = "https://picsum.photos/id/555/200/372";
    console.log(img.getAttribute("src"));
    console.log(firstImg);
    if(img.getAttribute("src")==firstImg){
      
        img.setAttribute("src",secondImg);
    }
    else {
        img.setAttribute("src",firstImg);
    }
}




