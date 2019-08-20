let btn = document.getElementById("btn");

//btn.addEventListener("click");

btn.addEventListener("click",btnClick);

function btnClick(e){
    //console.log(e)
    //console.log(e.target);
}

let div = document.getElementById("myDiv");
div.addEventListener("click",divClick);
function divClick(e){
    // console.log(e.target.style.height);
    // console.log(e.target.innerHTML);
}

let input = document.getElementById("fName");
input.addEventListener("keyup", inputKeyUp);

function inputKeyUp(e){
    // selecting the h1 and we change the text inside h1
    document.querySelector("h1").textContent=e.target.value;
   // console.log(e.target.value);
}

