//define Array in Javascript

let colors=new Array ("red", "blue", "green", "yellow");

let Colors= ["red", "blue", "green", "yellow"];

console.log(colors);


//adding the white color to the end of color Array


colors.push('white')

console.log(colors);

// let myColor=background[2];

let mydiv="<div style='background:"+ colors[3]+"' >" + colors[3] + "</div>";

document.write(mydiv);