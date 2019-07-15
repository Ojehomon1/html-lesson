// The javascript keyword this refers to the object it belongs to
//let o// = {
    //carID : 123
//}
//

console.log(this);

let person = {
    firstName: "Peter",

    lastName:" Uduevborho",
    
    fullName: function() {
        console.log(this);

        console.log("here we get the fullName");
        console.log(this.firstName + " " +this.lastName);
        this.age=31;  // adding new propertoy to the person object
    }

};

console.log(person.firstName);
console.log(person.fullName());

////////////////////////////////////////////////////////////////////////
let car = {

    name : "BMW",

    maxSpeed: "250",

    color : "blue",

    model : "17"

}

car.year = 2019;

console.log(car); // adding a new property (called year with the value 2019) to the object car
console.log(car.year); // checking in console to show the added property year.

car.info = function(){
   // this.model = "17";
    //console.log(this.name + " " + this.color + " "+this.model);
    return this.name + " " + this.color + " "+this.model;
}

console.log(car.info());
///////////////////////////////////////////////////////////////////

let merBenz = {
    name:"Mercedes",
    color: "Black",
    model: "A6"

};
// we use the info function from the object car in the object merBenz
console.log(car.info.call(merBenz));  // Mercedes Black A6

/////////////////////////////////////////////////////////////////

let btn = document.getElementById("myBtn");
let body = document.getElementsByTagName("body")[0];
//let body = document.querySelector("body");

btn.addEventListener("click",function(){

    this.style.background="red";
    this.style.color="white";
    this.style.fontSize="1.7em";
    body.style.background="#ccc";
    //this.parentElement.remove();
    this.remove(); // to remove the current element button 
});

