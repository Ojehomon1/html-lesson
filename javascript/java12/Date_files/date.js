let d = new Date(); 
console.log(d);
//standard call
document.write("Simple current date")
document.write(d);

//using milliseconds
let d_mil = new Date(0);
document.write(d_mil);
document.write("<br>");

d_mil = new Date(100000000);
document.write(d_mil);
document.write("<br>");

//current epoch
d_mil = new Date(15621339052)
document.write(d_mil);
document.write("<br>");
