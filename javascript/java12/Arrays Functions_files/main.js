let colors = ["red","blue","green"];
  
let colors1= ["orange","lightblue","pink"];
let allColors = colors.concat(colors1);
console.log(allColors); 
 // ["red","blue","green","orange","lightblue","pink"]
//     0      1      2       3         4          5                       
// Array.spice
console.log(allColors.slice(1,3)); // [ "blue", "green"]

console.log(allColors.slice(1,5));
 // [ "blue", "green", "orange", "lightblue"]


console.log(allColors.slice(0, 4));
// [ "red" "blue", "green", "orange"]

///////////////////////////////////////////////////////////////////////////
// Array.splice() to add elments and remove elements

// Array.splice(index.howmany,"item1,"item2)

// if howmany = 0 then nothing will be removed

let cars = ["BMW","Ford","Fiat"];
console.log(cars);                   // ["BMW", "Ford", "Fiat"]

cars.splice(0,2,"Mercedes","Audi");  // ["Mercedes"; "Audi", "Fiat"]

console.log(cars);

cars = ["BMW","Ford","Fiat"];
console.log(cars);

cars.splice(1,1,"Mercedes","Audi"); // to reset the array to old list again (don't use let )
console.log(cars);    //  ["BMW","Mercedes","Audi","Fiat"]


//////////////////////////////////////////////////////////////////////////////
// Array.find()

let food = ["banana","ananas","mango","apple"];

function check(foodName){

    return foodName=="apple";  // to search for apple (true/false value) in the array named 'food'

}

//console.log(food.find(check)); returns - "apple" - a true value

console.log("we are searching for apple : "+food.find(check));
// returns we are searching for apple : apple

///////////////////////////////////////////////////////////////////////////////
// Array.find - return the first item when the test is passed


let person = [ { name:"Anna", work:"doctor"},
               { name:"David",work:"web developer"},
               { name:"Eric",word:"hair dresser"},
               { name:"Mansour",word:"hair dresser"}

            ];

function isWebDeveloper(employee){    // this function will return true / false
            return employee.work=="web developer";

}
console.log(person.find(isWebDeveloper).name);  // returns -- "David"
console.log("the index of the web developer is : "+person.findIndex(isWebDeveloper)); 

///// findIndex()   return the first index when the test is passed
console.log("the index of the web developer is : "+person.findIndex(isWebDeveloper)); 
//// returns 1


// after reverse the array
person.reverse();  console.log(person);
console.log("the web developer is : "+person.find(isWebDeveloper).name); 


console.log("the index of the web developer is :"+person.findIndex(isWebDeveloper));

console.log(person.filter(isWebDeveloper));  // we search for all web developers

////////////////////////////////////////////////////////////////////////////
// Array.filter(function)  create an array filled with all array elements that pass a test
//(provided as a function)

let age = [15,18,30,55,60,13,22,75,70];
console.log(age.sort());  // to sort the array - returns list in sorted order

function canDrive(driverAge){
    return (driverAge >= 18 && driverAge<=70);

}

//console.log(age.filter(canDrive));

let drivers = age.filter(canDrive);
//console.log(drivers);
console.log(drivers.sort());
/////////////////////////////////////////////////////////////////////////////


// array.reduce(function)
let cities = [ 
                 { 
                     city: "Hamburg",
                     population: 1000000
                 },
                 {
                     city: "Berlin",
                    population: 2000000
                 },
                 {
                     city: "Stuttgart",
                     population: 700000   
                 }


];

function sumOfPopulation(total, num){
    return total + num.population
}
let allpopulation = cities.reduce(sumOfPopulation,0);
console.log("population is: " + allpopulation);