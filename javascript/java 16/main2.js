let heading = document.createElement("h1");
let text = document.createTextNode("this is h1 inside the main div");
heading.appendChild(text);
let mainDiv = document.getElementById("main");
//document.getElementById("main").appendChild(heading);
//document.querySelector("body").appendChild(heading);


function  addElement(){
    let heading = document.createElement("h1");
    let text = document.createTextNode("this is h1 inside the main div");
    heading.appendChild(text);
    document.getElementById("main").appendChild(heading);

}

function addElement2(){
    let heading = document.createElement("h1");
    heading.innerHTML="this is h1 inside the main div";
    heading.style.color="lightgreen";
    document.getElementById("main").appendChild(heading);
}

document.getElementById("btn").addEventListener("click",function(){
    addElement();
})

//append child
document.getElementById("btn2").addEventListener("click",function(){
    addElement2();
})

//remove child from childNodes
document.getElementById("del").addEventListener("click",function(){
    mainDiv.removeChild(mainDiv.childNodes[0]);

});




