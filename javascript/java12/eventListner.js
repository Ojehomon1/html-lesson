let img = document.getElementById("myImg");
let btn = document.getElementById("myBtn");

function changeImg(){
    if(img.getAttribute("src")== "oranges.jpg"){
        img.setAttribute("src", "cherries.jpg");
    }
    else{
        img.setAttribute("src","oranges.jpg");
    }
}

btn.addEventListener("click",changeImg);



