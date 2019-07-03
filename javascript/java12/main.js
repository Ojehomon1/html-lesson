let myDiv = document.getElementById("divToStyle");

let btn = document.querySelectorAll("button");
function txtBold(){
    myDiv.style.fontWeight="bold";
}
//function textitalic{
    //myDivstyle.fontStyle="italic";
    //}
//btn[1].addEventListener("click",textItalic);

btn[0].addEventListener("click",txtBold);
btn[0].addEventListener("mouseover",function() {
    btn[0].style.fontWeight="bold";
});
btn[0].addEventListener("mouseout",function() {
    btn[0].style.fontWeight="normal";
});

btn[1].addEventListener("click", function() { myDiv.style.fontStyle="italic";} );

btn[2].addEventListener("click", function() { myDiv.style.fontFamily="sans serif";} );

btn[3].addEventListener("click", function() { myDiv.style.fontFamily="courier";} );

btn[4].addEventListener("click", function() { myDiv.style.color="red";} );

btn[5].addEventListener("click", function() { myDiv.style.color="green";} );

btn[6].addEventListener("click", function() { myDiv.style.color="black";} );

btn[7].addEventListener("click", function() { myDiv.style.fontSize="small";} );

btn[8].addEventListener("click", function() { myDiv.style.fontSize="1em";} );

btn[9].addEventListener("click", function() { myDiv.style.fontSize="2em";} );
