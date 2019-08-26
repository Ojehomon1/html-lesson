let myDiv = document.getElementById("main");

myDiv.addEventListener("dragstart", start);
myDiv.addEventListener("dragend", end);

function start(){
    console.log("drag started");
}
function end(){
    console.log("drag ended")
}
let destDiv = document.querySelectorAll(".destination");

//using for of to loop
// for( let div of destDiv ){
//     div.addEventListener("dragover", over);
//     div.addEventListener("dragenter", enter);
//     div.addEventListener("dragleave", leave);
//     div.addEventListener("drop", drop);

// }

//using forEach loop
destDiv.forEach( function(div){  //shortcut alternative to function(div){ ..use... div => {  
    div.addEventListener("dragover", over);
    div.addEventListener("dragenter", enter);
    div.addEventListener("dragleave", leave);
    div.addEventListener("drop", drop);

});

//using for loop
// for (let i = 0; i < destDiv.length; i++){
//     //console.log(desDiv[i]);
//     destDiv[i].addEventListener("dragover", over);
//     destDiv[i].addEventListener("dragenter", enter);
//     destDiv[i].addEventListener("dragleave", leave);
//     destDiv[i].addEventListener("drop", drop);
// }

function over(e){
    e.preventDefault();
    console.log("drag over");
}
function enter(e){
    e.preventDefault();
    console.log("drag enter");
}
function leave(){
    console.log("drag leave");
}
function drop(){
    this.append(myDiv);
}
