// function hello(fullname){

//     console.log(`Hi ${fullname} the time is
//     ${new Date().getHours()} Hours and
//     ${new Date().getMinutes()} minutes ! `);

// }
// hello('DCI FBW3')

//--------------------------------------------------------------------------------
const Person = require('./person');
const person1 = new Person('John Doe', 32)
//console.log(__dirname, __filename)   // - print folder name and file name
Person.time();
console.log(Person.msg);
person1.greeting();

