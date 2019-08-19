const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

////////////////////////////////////////////////////////////////////////////////
//printing the whole object array list with for loop function
//   for(let i = 0 ; i < companies.length; i++){
//       console.log(companies[i]);
//   }
///////////////////////////////////////////////////////////////////////////////

//printing the whole object array list with the for each function
// companies.forEach (function(company){

//     console.log(company);
//     //console.log(company.name); to print out a specific company in the array list


// });
///////////////////////////////////////////////////////////////////////////////
//To print out from object ages the - ages from 21 or older
//Print out also those who can drive if ages above 21 - using push function

// let canDrive=[]
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >=21 ){
//         //console.log(ages[i]);
//         canDrive.push(ages[i]);
//     }

// }
// console.log(canDrive);
/////////////////////////////////////////////////////////////////////////////
//Using filter function in array - alternative using the push function seen above
// let canDrive = ages.filter(function(age){
//     if(age >= 21) {
//         return true;
//     }

// });
// console.log(canDrive);

//////////////////////////////////////////////////////////////////////////

// Example using the arrow function (=>) as alternative to push or filter functions

// let canDrive = ages.filter( (age) => age>=21 );
// console.log(canDrive);

// let canDrive = ages.filter((age) => { return age >= 21 });
// let canDrive = ages.filter( age => { return age >= 21 });

let canDrive = ages.filter( age => age >=21 );
console.log(canDrive);

/////////////////////////////////////////////////////////////////////////
//get all Retail Companies listed in the object array - companies
let retailCompanies = companies.filter(function(company){

    // if(company.category=="Retail"){
    //     return true;
    // }

    return company.category=="Retail";  // alternative way instead of commented if method above
});
console.log(retailCompanies);

retailCompanies = companies.filter ( (company) => company.category =="Retail");
console.log(retailCompanies);

/////////////////////////////////////////////////////////////////////////////
// Using filter function to get select companies with start and end in the 80s

//const eightiesCompanies = companies.filter( company => company.start >=1980 && company.end <1990 );
//console.log(eightiesCompanies);   -- array of company names

////////////////////////////////////////////////////////////////////////////
// array map
// const companyNames=companies.map(function(company){
//     return company.name + [company.end - company.start] + " years";
// });

// console.log(companyNames);

/////////////////////////////////////////////////////////////////////////
// Using template literals - shorter way to write code
const companyNames = companies.map(company => `${company.name} ${company.end-company.start} years`);
console.log(companyNames);

// Using map function to get the squareroot of array and multiply with 2
const agesMap = ages.map(age => Math.sqrt(age))

                .map(age => age * 2);

console.log(agesMap);

///////////////////////////////////////////////////////////////////////////////
// Using sort function does not give correct result when sorting numbers
let ageSort = ages.sort();
console.log(ageSort);

// sorting is correct
   ageSort = ages.sort(function(a,b){
    return a-b;      // - ascending order
    //return b-a;    -   descending order

   });

   console.log(ageSort);

 // //////////////////////////////////////////////////////////////////////
//sorting the companies according to the start year

// const sortedCompanies = companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         return -1;
//     }
//     else {
//         return 1;
//     }

// });
// console.log(sortedCompanies);

///////////////////////////////////////////////////////////////////////////////
// Using the arrow function as shorter way to write code for above
const sortedCompanies = companies.sort((c1,c2) => (c1.start > c2.start ? 1 : -1 ));

console.log(sortedCompanies);

///////////////////////////////////////////////////////////////////////////////

// sum Ages
// let ageSum = 0
// for (let i = 0; i < ages.length; i++){
//     ageSum = ageSum + ages[i];
    
// }
// console.log(`the sum of age is ${ageSum}`);

////////////////////////////////////////////////////////////////////
// Using the reduce function

let ageSum = ages.reduce(function(total,age){

    return total + age;

});

console.log(`the sum of age is ${ageSum}`);

ageSum = ages.reduce( (total,age) => total+ age );

//////////////////////////////////////////////////////////////////////////////////
// the total of companies years
const totalYears = companies.reduce((total,company) => total + (company.end - company.start));

console.log(`the total of companies years is ${totalYears}`);
