//using of pop and push in arrays

let colors= ["orange","pink","green"];

console.log(colors);
colors.push("blue");
console.log(colors);
//array will be  ["orange","pink","green","blue"]

//pop is used to remove the last element from array
console.log(colors);
colors.pop();
console.log(colors);
let col=colors.pop();
// It return green
console.log(col);
console.log(colors);

//shift and unshift
let fruits=["apple","mango","banana"];

//shift is used to remove first element from the array
console.log(fruits);
fruits.shift();
console.log(fruits);

//unshift is used to add element to the array
fruits.unshift("ananas");
console.log(fruits);
fruits.unshift("kiwi","blueberries","avocado");
console.log(fruits);
fruits.push("lemon","orange");
console.log(fruits);

//indexOf is used to get the index of an array
console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("lime"));  //if you search for element not in array the answer will be -1
console.log(fruits);
//["kiwi","blueberries","avocado","ananas","mango","banana","lemon","orange"]
//   0        1             2         3       4        5       6        7

//we copy the elments ananas,mango,banana,lemon to a new array using slice()

let myFruits= fruits.slice(3,7);
console.log(myFruits);

// when we use slice() without indexes then it will copy the whole elements in array

let newFruits= fruits.slice();
console.log("this is a copy from fruits");
console.log(newFruits);

//splice() is used to delete elements from an array
console.log("****** before splice **********")
console.log(newFruits);
console.log("*******before splice *********")
//["kiwi","blueberries","avocado","ananas","mango","banana","lemon","orange"]
//   0        1             2         3       4        5       6        7
newFruits.splice(1, 3);  
console.log(newFruits);  // "blueberries", "ananas" are deleted from the array.



// forEach loop for arrays


//let cars= ["bmw","Audi","mercedes","fiat"];
//for(let i=0; i<cars.length;i++){
    //document.write(cars[0]);

//}

///////////////////////////////////////////////////////////////////
// with forEach()

//cars.forEach(function(carname) { console.log(carname); } );

//////////////////////////////////////////////////////////
//let num= [1,2,3];
//num.forEach(function(n){  n=n+10; alert(n); } );
///////////////////////////////////////////////////////

/*
let num= [1,2,3];
num.forEach(function(n){
    n=n+10;
    alert(n);

});



for(let i=0; i<num.length; 1++){
    num[i]=num[i]+ 10 ;
    alert(num[i]);
}
*/


//let food = ["apple","kebab","dönner"];

//food.forEach( function(f){ console.log(f); } ); // is the same like:

// food.forEach( myfood);

//function myfood(foodname){
   // console.log(foodname);

/*
food.forEach( myfood);

function myfood(foodname){
    console.log(foodname);

}
*/
//////////////////////////////////////////////////////////////////////

let weekdays= ["mo","tu","we","th","fr","sa","so"];
 //              0    1    2    3    4    5    6
weekdays.forEach(printdays);

function printdays(item,index)
{
    console.log(item +  "  " + index);
}

//we print the array using for loop
/*
for(let i =0 ; i<weekdays.length; i++)
{
    console.log(weekdays[i] + "  " + i );

}
*/
function printArrDay(item,index,arr){

    console.log(index);
    console.log(arr[index]);
}

weekdays.forEach(printArrDay);

weekdays.forEach( function(item,index,arr){ console.log("the day is" + item);

})


////////////////////////////////////////////////////////////////////////

//print the array element by multi every element with 9 using forEach

let numbers= [1,4,5,6,7,8,9];

numbers.forEach(printnum)
function printnum(item,)
{
    console.log(item*9)
}