let book = {

    name: "javascript the good part",
    author: "John",
    year: 2016,

    bookInfo: function(){
        return "the book name is "+ this.name + "the Author :"+this.author;
    }

};

console.log(book.bookInfo());

//console.log(book);
// using for-in loop method
for (let i in book) {
    console.log(book[i]);

}

///////////////////////////////////////////////////////////////////////
let message = "Hello world";

let greet = message;

greet = "Hi there!";

console.log(message);  // Hello world
console.log(greet);    // Hi there!

//////////////////////////////////////////////////////////////////////

let person = {
    name: "John",

    age:28,

    gender:"male"


};
let user = person;

console.log(user.name); // John

user.name="Peter"

console.log(user.name);
console.log(person.name);


console.log(typeof greet);  // string
console.log(typeof user)   //  object

/////////////////////////////////////////////////////////////////////

// let personName = "John Smith";

// personName = new String();



// console.log(typeof personName);
// console.log(personName.toUpperCase());
// console.log(typeof personName);                                                                                                                                              

// let personName2 = new String("John Smith");

// console.log(typeof personName2);

//////////////////////////////////////////////////////////////////////////////

//let book1 = { };
let book1 = new Object();           //{ }
book1.bookName="lern javascript";
book1.authorName="John";
book1.year = 2019;

book1.info=function(){
    return this.bookName + " published in " + this.year;

}
console.log(book1.info());

//////////////////////////////////////////////////////////////////////

function Book(name,author,year){

    this.bookName = name;
    this.authorName = author;
    this.publishYear = year;
    this.info = function(){
        return this.bookName + "written by "+this.authorName+ "is published in " + this.publishYear
    };


}

let cssBook = new Book("learn CSS in 4 days","Peter",2019);

console.log(cssBook.info());

for (let i in cssBook){
    console.log(cssBook[i]);
}
////////////////////////////////////////////////////////////////////////

let img 