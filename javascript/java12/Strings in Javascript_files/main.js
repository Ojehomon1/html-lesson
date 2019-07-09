let str = "Hello World";
console.log(str.length); // 11
console.log(str[0]); // H


console.log(str.charAt(6));  // return character at specific index position, e.g W

console.log(str.charCodeAt(1)); // 101

let str1 = "we are learning";
let str2 = " javascript";
let str3 = str1.concat(str2);

console.log(str3); // we are learning javascript

console.log("the index of javascript is "+str3.indexOf("javascript")); // 16
console.log(str.indexOf("php")); // return -1 (which means the word php does not exist)

str1.match("we are learning")

