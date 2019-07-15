let btn = document.getElementById("myBtn");
let btn2=document.getElementById("btnImg");
let img=document.getElementById("myImg");

function init(){
btn.style.left="150px";
btn.style.top="0px";
btn.style.position="relative";
img.style.position="relative";
img.style.left="0px";
}

btn.addEventListener("click",function(){

    this.style.left= parseInt(this.style.left) + 10 + "px";
    this.style.top=parseInt(this.style.top) + 10 + "px";
    //alert(parseInt(this.style.top));


});

btn2.addEventListener("click",function(){
        img.style.left= parseInt(img.style.left) + 10 + "px";

    });
    window.onload=init();