let input=document.querySelectorAll("input");
function myFunction(num){
    
    input[num].style.background = "purple"; 
}
function inputChange(){
    input[1].style.background = "red";  
}
function inputSelect(){
    input[1].style.background="lightgreen";
    console.log("you selected some text");
}
function inputBlur(){
    input[0].style.background= "transparent";
}
function inputKeyDown(){
    //console.log("you pressed a key inside the input Fullname");
    input[0].style.background = "#B7EF97";
}
function inputKeyUp(){
    input[0].style.background = "#9FDFEF";
    console.log("the key up event: " + input[0].value);
}
function inputKeyPress(){
    input[1].style.background="#F78104";
    console.log("the key press event" + input[1].value);
}
function formSubmit(){
    alert("you will be redirected");
}




/*
let input= document.querySelectorAll("input");

function myfunction(){


   input[0].style.background = "pink";
}
function inputChange(number){
   input[number].style.background = "purple";
}

function inputSelect(number){
   input[number].style.background = "green";

}
function inputBlur(number){
   input[number].style.background = "transparent";
}
/* function inputKeyDown(number){
  alert("you pressed a key inside the input fullname")
}
function inputKeyUp(number){
   /* input[number].style.background = "#9FDFEF"; */
   //console.log("the key up event:"+input[number].value);
/*}
function inputKeyPress(number){
   /* input[number].style.background = "#B7EF97"; */
   //console.log("the key up event:"+input[number].value);

/*
}

function formSubmit(){
   alert("you pressed a keyayayayayayayayfullname")
}
*/