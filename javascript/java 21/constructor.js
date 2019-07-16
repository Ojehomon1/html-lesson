// let person = {

//     firstName:"Jack",
//     lastName:"Doe",
//     age: 50,
//     hairColor:"black",
//     personInfo: function(){
//         //console.log(this.firstName +" "+ this.lastName+" "+ this.age);
//         return this.firstName +" "+ this.lastName+" "+ this.age;
//     }

// };

// function Person(first,last,age,hair){ // constructor function
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.hairColor = hair;
//     this.personInfo = function(){
//         console.log(this.firstName +" "+ this.lastName+" "+ this.age);
//     }

// }

// let person2 = new Person("John","Smith",60,"brown");

// console.log(person.personInfo());
// console.log(person2.personInfo());


// let colors = new Array("red","green","blue");
// colors = ["red","green","blue"]; // the same  [] = new Array

// console.log(colors);

// let car = new Object();
// car.name="bmw";
// car.year="2019";
// console.log(car);
// car = {}; // the same with new Object();

//////////////////////////////////////////////////////////////
// employee
// name
// salary
// job
// info()


// //my attempt
// let employee = {

//         name:"Niko",
//         salary:1000,
//         job: "web developer",
//         personInfo: function(){
//         console.log(this.name +" "+ this.salary+" "+ this.job);
//         return this.name +" "+ this.salary+" "+ this.job;
//      }

// };

// function Employee(name,salary,job){ // constructor function
//         this.name = name;
//         this.salary = salary;
//         this.job = job;
//         this.personInfo = function(){
//     console.log(this.name +" "+ this.salary+" "+ this.job);
//     return this.name +" "+ this.salary+" "+ this.job;
//         }
//     };
   
// function Employee(name,salary,job){
//     this.name=name;
//     this.salary=salary;
//     this.job=job;
//     this.info=function(){
//         return this.name + " earns " + this.salary+ "$ " + "and works as "+this.job + " and lives in "+this.city;

//     }
// }

// let emp1 = new Employee("Jack", 5000,"javascript developer");
// let emp2 = new Employee("Ralf", 8000,"senior JS Developer");

// emp1.city = "Hamburg";
// emp2.city = "New York";

// console.log(emp1.info());
// console.log(emp2.info());
// console.log(emp1.city);
// console.log(emp2.city);
// console.log(emp1.info());
// console.log(emp2.info());

// let emp3 = new Employee("Steven",5000,"node js developer");
// emp3.city = "Berlin";

// console.log(emp3.info());

/////////////////////////////////////////////////////////////////////

let student = {
    name: "Maria",
    age: "22",
    city: "Berlin",
    university: "TU Berlin",
    language: "EN",
    get lang(){  //to get the value of a property
        return this.language;

    },

    set lang(value){ // to change the value of a property
        this.language=value;
    }
};

console.log(student.lang);
student.lang="DE";
console.log(student.lang);

//student.language="English";
//console.log(student.lang);

//creating a constructor for above object

function Student(name,age,city,university,language,usd, changeRate){
    this.name=name;
    this.age=age;
    this.city=city;
    this.university=university;
    this.language=language;
    this.bankAccount=usd;
    this.changeMoney=function(){
        return this.bankAccount * changeRate;

    },
    //this.langInfo = function (){  return this.language;  };

    this.studentInfo = function (){
        return this.name + " " + this.age + " lives in "+this.city + " and studies in "
        +this.university+" and speaks "+ this.language+ " and has "+ this.changeMoney()+ " Euro";
    }

}
let student1=new Student("Lara","23","Hamburg","Uni Hamburg","German",1000,0.8);
let student2=new Student("Leo","22","Hamburg","Uni Berlin","English",5000,1.2);

//console.log(student1.changeMoney() + " Euro ");
//console.log(student2.changeMoney() + " Euro ");

console.log(student1.studentInfo());
console.log(student2.studentInfo());

///////////////////////////////////////////////////////////////////////////

class Students{
    constructor(name,age,city,university,language,usd, changeRate){

    this.name=name;
    this.age=age;
    this.city=city;
    this.university=university;
    this.language=language;
    this.bankAccount=usd;
    this.changeMoney=function(){
        return this.bankAccount * changeRate;
    }
    this.studentInfo = function (){
        return this.name + " " + this.age + " lives in "+this.city + " and studies in "
        +this.university+" and speaks "+ this.language+ " and has "+ this.changeMoney()+ " Euro";
    };

}

hello(){
    return "Hello "+this.name;
}

}
let manuel=new Students("Manuel",27,"Köln","Köln University","German",1000,1.1);
//console.log(manuel.studentInfo());
alert(manuel.hello());
document.getElementById("info").innerHTML=manuel.studentInfo();

