
//$("h1") is the same as document.querySelectorAll("h1");

//we change all li colors to green in vanilla js
let lis = document.querySelectorAll("li");
for(let i=0; i<lis.length; i++){ 
   // lis[i].style.color="green";
}

// lis.forEach(element => {
//     element.style.color="orange";
// });

//change all li colors to red using jquery
$("li").css("color", "red");

$("li").css({
    "border":"2px solid #ccc",
    "background": "orange",
    "fontSize":"2em",
    "color":"#fff"
});

console.log($("li").css("backgroundColor"));  //rgb(255, 165, 0)
console.log(document.querySelector("li").style.backgroundColor);  //orange

//Select all divs and give them a purple background
$("div").css("background", "purple");

//Select the divs with class "highlight and make them 200px wide"
$("div.highlight").css("width", "200px");


//select the div with id "third" and give it an orange border
$("#third").css("border", "2px solid orange" );

//Select the first div only and change its font color to pink
//$("div:first").css("color", "pink");
$("div:eq(0)").css("color", "pink");

$("div:eq(0)").css("background", "pink");

//Select the first div with class  highlight and change its font color to orange
$("divt:first").css("color", "orange");

//change the text of the h1 from "jquery is nice" to "jquery is awesome"
document.querySelectorAll("h1")[1].textContent = "jquery is awesome";
// in jquery we used the code:
//$("h1:eq(1)").text("jquery is really awesome")

//$("h1:eq(1)").html("<button>click me</button></button>jquery is really awesome")
$("h1:eq(1)").html("<input type='text' > query is really awesome")

document.querySelector("input").value="jquery is awesome"; // value in input field
// in jquery we use the code
$("input").val("jquery is nice");
$

// console.log($("input").attr("type"));
// $("input").attr("type","checkbox");
// console.log($("input").attr("type")); 

$("img").attr("src","https://picsum.photos/id/393/800/400");
$("img").css("width","200px");
$("img:eq(1)").attr("src", "https://picsum.photos/id/393/800/400");

$("img:eq(0)").attr("title","Bridge photo");