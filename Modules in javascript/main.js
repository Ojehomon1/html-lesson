import p,{printName as pName, printAge as pAge} from "./person.js";

let person = new p("Romal", 25);

console.log(person);

pName(person);
pAge(person);