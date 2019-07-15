
//function dummy(name) {
     //do something
   //alert("Hi "+name);

//}

//dummy("Peter");
//dummy("Sammy"); dummy("Helen")
////////////////////////////////////////////////////////

//function greetUser(name, surname) {
     //do something
    //alert("Hi "+ name + " " + surname);
//}

//greetUser("Peter,  Uduevborho")

/////////////////////////////////////////////////////////

//function declaration
//function square(number) {
    //return number*number;
//}


//using anonymous function
var sum = function(number) {
    return number + 10;
}


function whichDayIsIt(number) {
    var weekday;
    //switch goes here: if number is 0 then weekday is "Sunday" etc.....
    switch (number){
        case 0:
            weekday = "Monday";
            break;
            
        case 1:
            weekday = "Tuesday";
            break;


        case 2:
            weekday = "Wednesday";
            break;

        case 3:
            weekday = "Thursday";
            break;

        case 4:
            weekday = "Friday";
            break;

        case 5:
            weekday = "Saturday";
            break;

        case 6:
            weekday = "Sunday";
            break;
         
        default:
            alert("Please give a right number.....!");    
        
    }
    return weekday
}

///////////////////////////////////////////////////////////////////////
//example - using switch function in for-loop 
/*

for(let i=0; i<=6, i++) {}
whichDayIsIt(number),

*/
/*
for(let i = 0; i<=6; i++) {
console.log(whichDayIsIt(i));
//console.log(i);
}
*/

///////////////////////////////////////////////////////////////////////////////
//example - using switch function in while-loop
let i = 0;
while(i < 7) {

    console.log("while " + whichDayIsIt (i));
    i++;
}

/////////////////////////////////////////////////////////////////////////////
// example - how to create an object
/* let car = {name: "BMW", year: "2018", color: "black"}
console.log(car);
console.log(car.name);
console.log(car.year);
console.log(car.color);


let car1 = {name: "BMW", color: "black"}
let car2 = {name: "VW", color: "white"}

let cars = [car1, car2]

console.log(car1, car2);
*/
 ///////////////////////////////////////////////////////////////////////
 //please write a function to place country depending on name of the care

 let car1 = {name: "BMW", country: "Germany"};
 let car2 = {name: "Ford", country: "USA"};
 let car3 = {name: "Fiat", country: "Italy"};

 let cars = [car1, car2, car3];
 
 function findCarCountry(name) {
     let country;
     for(let i=0; i<cars.length; i++) {
    
        if(cars[i].name == name){
        country = cars[i].country;  
        }

     }

         return country;

 }
    console.log(findCarCountry("Fiat"));

///////////////////////////////////////////////////////////////////////

    let newCars = ["BMW", "Ford", "Ferrari"];
    function findYourCar(car) {
        let found = false;
        for (let i = 0; i < newCars.length; i++) {
            if (newCars[i] == car) {
               found = true;
            
            }
         
            }
            if (found) {
                console.log("Found");
        }
        else {
            console.log("Not Found");
        }
    }
    console.log(findYourCar("Passat"));

    //////////////////////////////////////////////////////////////////
    //print triangle of stars form 4 line and 4 colomns
    

    function drawTriangle(size) {
    document.write('<br>');
    
    for(let i=0 ; i< size ; i++){
    for(let a=0; a<i; a++){
            document.write('&nbsp;') 
                }
        for(let j=i; j<size; j++){
            //document.write( 'i=' + i + ' and j= ' + j );
            document.write(' $ ');
        }
        
        document.write('<br>');
        }
    }
-
    console.log(drawTriangle(8));