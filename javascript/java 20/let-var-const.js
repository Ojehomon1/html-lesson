function start(){

  for (let i = 0; i < 5; i++) {
      console.log(i);
     
  }
  // console.log(i);
}
//start();

////////////////////////////////////////////////////////////////////
function start2(){

for (let i = 0; i < 5; i++) {
    if(true){
        var color = "blue"
    }
    
}
console.log(color);
}
start2();

///////////////////////////////////////////////////////////////////////
/*
var myColor = "red";
console.log(widow.myColor); // red

let age = 30;
console.log(window.age); // undefined

//const name = "joe";
//name = "jack"
//name="new name"
//console.log(name);

const userColor = "lightblue";
//userColor = "red";
console.log(userColor);


for (let i = 0; i < 5; i++) {

    console.log(i);
    
}
*/
//////////////////////////////////////////////////////////////////////
// const object
/*
const car = {
    name:"Mercedes",
    color: "black",
    model:"amg",
    year: 2019,

    carInfo:function(){
        console.log(this.name +" made in " + this.year);

    },
    age : 9
};

console.log(car.carInfo());
car.name= "BMW"; 
console.log(car.name);
console.log(car.year);
console.log(car.carInfo());

car = {name:"Fiat", year:"2000" };

console.log(car);
*/
///////////////////////////////////////////////////////////////////////
//const Array

const drink = ["water","coffee","milk","tea"];

drink[4]="green tea";

console.log(drink);

drink[3]="lemon juice";  // changing and replacing just one property (water to lemon juice) in the array

console.log(drink);

drink = ["green tea","beer","cappucciano"]; // ERROR

console.log(drink);

/////////////////////////////////////////////////////////////////////////





