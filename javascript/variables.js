let firstName, lastName;


firstName= 'Peter';
lastName="Uduevborho";
//alert(firstName)

console.log("My name is : " + firstName+ " " + lastName);
//typeof() is used to know the type of variable
console.log(typeof(firstName));


let x=10;
let linebreak='<br>';
//document.write(x%4);
document.write(x*5);
document.write('<br>');
document.write(x/5);
//document.write('<div style="background:red;height:250px;" > new div </div>');
document.write(linebreak);
let y= x+ 'string text ';
document.write(typeof(y));
x=5;
document.write(linebreak);
document.write(x);
result=x--;
document.write(linebreak);
document.write(result);

document.write(linebreak);
document.write(x);

//with x--

x=5
document.write(linebreak);
document.write('x = ');
document.write(x);
x--;
result=x--;

document.write(linebreak);
document.write('x-- =' );
document.write(result);
document.write(linebreak);
document.write('result = ');
document.write(result);


//comparison Operators

document.write(linebreak);
let age=17;
let minAge=18;
document.write(age==minAge);

if(age==minAge){
    alert('You are '+ age );
}
document.write(linebreak);
document.write(age >= minAge);
if(age >= minAge){
    alert('you are '+ minAge + 'or older ');
}


