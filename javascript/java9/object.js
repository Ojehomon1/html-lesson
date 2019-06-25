// to define array we use let car=["bmw","fiat"];
// or let car=new array();




let cars = { brand:"BMW", color:"white", year:"2019"};

let person = { firstName:"John", lastName:"Tom", age:50, haircolor:"green"};

console.log(cars);
console.log(cars.brand);
console.log(cars.color);
cars.brand="Mercedes";
console.log(cars.brand);

person.age=66;
person.age+=1; // increase age with 1
person.age= person.age+1; // also increase age  1
console.log(person.age);
person.city="Hamburg";
console.log(person.city);
person.favColor="yellow";
console.log(person);
person["fav Color"]="yellow";
console.log(person);


/// create object

let language= new Object();  // or let language= {};
language.name="English"
language.level="easy";
console.log(language);

let driver = {
    age:60,
    firstname:"John",
    nationality:"UK",
    car : { brand:"ford", color:"black", year:"2012"}

};

console.log(driver.car);
console.log(driver.car.color);
console.log(driver.car.year);
console.log(driver["car"].year);  // another way to print object
console.log(driver["car"]["brand"]); // another way to print object
driver.pet= ["cat","dog"];  // array
console.log(driver.pet[0]);  // cat
console.log(driver.pet[1]);  // dog


// we create now array of object

/*for example so
let posts = [
    "nice",
    "very nice"
    ];
console.log(posts);
*/

let posts = [
    {title:"cats are nice", author : "Mansour" },
    {title:"dogs are totally awesome", author : "dog lover"}

];
console.log(posts);

posts[1].title="dogs are totally cute";
console.log(posts[1].title);
console.log(posts);
posts[0].comment="nice post I like it";
console.log(posts);

posts[1].comment= ["nice thank you ", "no I hate you"];
console.log(posts[1]);
console.log(posts[1].comment[1]);
posts[1].comment[1]= "nice post :)";
console.log(posts[1].comment[1]);
console.log(posts);

// add the words "thanks a lot" to the comment "nice post"
posts[1].comment[1]+= "thanks a lot";
console.log(posts[1].comment[1]);
document.write(posts);


//////////////////////////////////////////////////////////////////////
// WE CREATE A STUDENT OBJECT
let student = {

    firstName:"Peter",
    lastName:"Uduevborho",
    id:1234,
    overThirty:true,
    fullName: function() {
        return "the fullname is :"+ student.firstName + " " + student.lastName;

    }

};
console.log(student.fullName());

//////////////////////////////////////////////////////////////////////////////////////
//example 1 : Create a person object. Include the person's first and last name, age, job, city etc. 
//Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France".

let someone = {

    firstName:"Peter",
    lastName:"Uduevborho",
    age:52,
    job:"Student",
    city:"France",
    

};

console.log(someone.firstName + " " + someone.lastName + " is a " + someone.age + " year old engineer living in " + someone.city );

///////////////////////////////////////////////////////////////////////////////////////////
//example 2 : Create an array of movies objects. 
//Each movie should have a title, rating and has watched property

//you have watched "wanted film " is " 5 stars"
//you have watched "Mother film " is " 4 stars"
let movies = [

    {watched:true, title:"the good the bad and the ugly", rating : "5 stars" },
    {watched:true, title:"diamonds are forever", rating : "4 stars"},
    {watched:true, title:"jaws", rating : "5 stars" },
    {watched:true, title:"sound of music", rating : "4 stars"},
    {watched:true, title:"django", rating : "5 stars" },
    {watched:true, title:"the great gambler", rating : "4 stars"},
    {watched:false, title:"captain marvel", rating : "3 stars" },
    {watched:false, title:"shazam", rating : "3 stars"}


];

//using for loop
for (i = 0; i < movies.length; i++){
    console.log(movies[i].title, movies[i].rating, movies[i].watched);
}
//////////////////////////////////////////////////////////////////////////////
// using while loop

let counter = 0;

console.log("whileloop by Peter without any help (especially not by Natalie) !!!--------------------------------------------------------");
while (counter < movies.length)  {
    console.log(movies[counter].title, movies[counter].rating, movies[counter].watched);
    counter++;
  }


////////////////////////////////////////////////////////////////////
// Alternative solution for example 1
//example 1 : Create a person object. Include the person's first and last name, age, job, city etc. 
//Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France".


let Person ={
    firstName : "John",
    lastName :  "Smith",
    age : 41,
    profession: "engineer",
    city : "France",
    info:function() {
        return Person.firstName + " " + Person.lastName + "  is " + Person.age
         + " year old " + Person.profession + " living in " + Person.city ;
    }

};
document.write(Person.info());


//Person.firstName= "John"; // the same
//Person.lastName= "Smith"; // the same

////////////////////////////////////////////////////////////////////////////////
//alternative solution to example 2 

// example 2 :create an array of movies objects
//  Each movie should have a title, rating and has watched property 


//  you have watched "wanted film " is " 5 stars" 
//  you have watched "Mother film " is " 4 stars" 

 movies = [
    {
        title:"Titanic",
        hasWatched: true,
        rating: 5
    },    
    {
        title :"despicable me 3",
        hasWatched:true,
        rating:4
    },
    {
        title:"God Father",
        hasWatched:true,
        rating: 5
    },
    {
        title: "Pretty Women",
        hasWatched:false,
        rating: 3
    },
    { 
        title : "Passenger",
        hasWatched:true,
        rating : 4
    },
    { 
        title : "Harry Potter",
        hasWatched:false,
        rating : 5
    }
];
function stars(num){
    let str="";
    if(num > 5 ){  num=5;  }
    for (let i=0; i< num;i++){
        str+=" * ";
    }
    return str;
 }
 movies.forEach(function(film){
    if(film.hasWatched==true){
        console.log("You watched "+ film.title +
        " has "+film.rating+ " Stars " + stars(film.rating) );
 
    }
    else{
        console.log("You have to watch "+ film.title +
        " has "+film.rating+ " Stars" + stars(film.rating) )
    }
 
 });


///////////////////////////////////////////////////////////////////////////


