let link = document.querySelector("a"); // we get the first link 

console.log(link.getAttribute("href")); // www.google.com

// we change the href (link) from www.google.com to www.ping.com
link.setAttribute("href","http://www.ping.com");

console.log(link.getAttribute("href")); // www.ping.com
/////////////////////////////////////////////////////////////////


let img = document.querySelector("img");  // define the image
// we change the image from node logo to angular logo
img.setAttribute("src", "angular.png");

///////////////////////////////////////////////////////////
//using toogle to change the logos
let toggle = true;
img.addEventListener("click", function(){
    if(toggle){
        img.setAttribute("src", "logo.png");
        toggle = false;
    } else {
        img.setAttribute("src", "angular.png");
        toggle = true;
    }
})