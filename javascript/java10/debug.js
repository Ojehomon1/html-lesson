/*
let number = 10

count(number);

function count(number) {
    for (let i = 0; i < number; i++) {
        //document.write("<br>");
        document.write(i);
    }
}
*/
/////////////////////////////////////////////////
//create square with stars using function

function square(number) {
    for(i = 0; i < number; i++){
        for(b = 0; b < number; b ++){
            document.write("&nbsp;*&nbsp;");
        }
        document.write("<br>")
    }
}

square(6);










//////////////////////////////////////////////////////////////

/*
let person = {
    firstName: "John",
    lastName: "Snow",
    age: 250,
    eyeColor: "blue"
};

printPersonProps(person);

function printPersonProps(obj) {
    //let text;
    //text = "There was a user with the name" + obj.firstName
    //document.write(text);
    for (prop in obj) {
        document.write(obj[prop])}
   // for (let i=0; i<4; i++) {
       // document.write(obj[i]);
    //}
}
*/
