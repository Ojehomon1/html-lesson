let htag=document.getElementsByTagName("h1");
//htag[0].style.color="blue";
htag[1].style.color="lightgreen";
//htag[0].style.border="5px solid lightblue"

htag[0].classList.add("light");
//htag[0].classList.remove("light");

let par= document.getElementsByTagName("p")[0];
par.classList.add('light');
par.classList.add('bg');
console.log(par)
// getting the text content

let p= document.querySelector("p");
console.log(p.textContent); // this giv:  learning javascript is very amazing

p.textContent=" i love <strong> javascript </strong>"; // this giv: i love <strong> javascript </strong>
// textContent will not render the strong tag
p.innerHTML=" i love <strong> javascript </strong>"; // this giv: i love javascript
// innerHTML is rendering the strong tag

// we add h2 to the paragraph

p.innerHTML=" <h4> Javascript </h4> I love <strong> javascript </strong>";



// we remove the Name "bg" from the first paragraph
par.classList.remove('bg');

// we add the class Name "light" to the second paragraph
par.classList.add('light');

let pClass= document.querySelectorAll(".light");
pClass[0].style.color = "red";
pClass[1].style.color = "red";

// we want to change the color of every p HTML element to red - using for loop

let pAll= document.querySelectorAll("p");
for (i = 0; i < pAll.length; i++) {
    pAll[i].style.color = "red";
}

// Mansours solution - same as above
// let allP=document.querySelectorAll("p");
// for(let i = 0; i < allP.length; i++) {
//    all[i].style.color="red";
//}

