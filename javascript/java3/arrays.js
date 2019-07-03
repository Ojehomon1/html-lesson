//define Array in Javascript

let colors= ["red", "blue", "green", "yellow", ""];

// Alternative method to define an Array - using ...newArray();
// let colors=new Array ("red", "blue", "green", "yellow");

console.log(colors);


//adding the white color to the end of color Array


colors.push('orange')

console.log(colors);

let myColor=colors[0];

// let mydiv="<div style='color:"+ myColor+"' >" + colors[3] + "</div>";

// document.write(mydiv);

///////////////////////////////////////////////////////////

let mydiv="<div style='color:"+ myColor+"' >" + myColor + "</div>";
let mydiv1="<div style='color:"+ colors[1]+"' >" + colors[1] + "</div>";
let mydiv2="<div style='color:"+ colors[2]+"' >" + colors[2] + "</div>";
let mydiv3="<div style='color:"+ colors[3]+"' >" + colors[3] + "</div>";

document.write(mydiv);
document.write(mydiv1);
document.write(mydiv2);
document.write(mydiv3);


//for loop
for(let counter=0; counter<=10; counter ++){
    document.write(counter + '<br>');
}


