//printing the numbers between 1 and 20 multi 9
//let i=0;
//while(i <= 20){

//console.log(i + " * 9 =" + i * 9 );
//i++;
//}

//////////////////////////////////////////////////////////////////////

//let j = 20;
//while (j >= 0){

    //console.log(j + " * 9 =" + j * 9);
    //j--;
//}

///////////////////////////////////////////////////////////////////////

//let sum=0,counter=0;

//while(counter <= 10){
    //sum = sum + counter;
    //alert( " sum = "+ sum);

    //counter++;

//}

////////////////////////////////////////////////////////////////////
//let sum=0,counter=0;

//while(counter <= 10){
    //sum = sum + counter;
    //alert( "Counter = "+counter+ " sum = "+ sum);

    //counter++;

//}

// let c=prompt("please enter a variable value between 1 and 10")
// alert(c);


////////////////////////////////////////////////////////////////////
// do while loop

//let i=0;
//let str="";
//do{
    //str = "the counter=" + i ;
    //console.log(str);
    //i++;

//}
//while(i < 10);

//////////////////////////////////////////////////////////////////////

//let t=0;
//let Sum=0;
//do{
   // Sum=Sum+t;
    //console.log("t ="+t+" and Sum = "+ Sum);
    //t++;

//}
//while(t < 10);

//////////////////////////////////////////////////////////////////////
// Using for-loop to display triangle with stars

// i= 0
// for (let i= 1 ; i <= 5 ;i++ ) {             // for number of rows

//     for (let c=1 ; c <= 5 ; c++){           // for number of columns
//      document.write(' * ') 
//     }

//     document.write(' line number ' + 1 '<br>');

//}

///////////////////////////////////////////////////////////////////////////
// Using while-loop instead of for-loop to print triange with stars
//

 i=1;

while(i <= 5){
    c=1;

    while(c <= 5){
    document.write('*');
    c++;
    }

document.write('<br>');
i++;

}
5

/////////////////////////////////////////////////////////////////////////////
//printing triangle of stars using while loop
i=1;

while(i <= 5){
    c=1;

    while(c <= i){
    document.write('*');
    c++;
    }

document.write('<br>');
i++;

}
5

///////////////////////////////////////////////////////////////////////////
//let myList= ["Apple","Orange","Banana","Chicken"];
//myList.push("Ananas");
//document.write(myList);



//////////////////////////////////////////////////////////////////

let veggieFood =["Apple","Orange","Kiwi","Beans","Potato","Banana"]
veggieFood.push("Chicken","Tomato")
for(let i=0; i< veggieFood.length; i++){

    if(veggieFood[i]=="Chicken"){
        alert(" oh nooo your food list is not veggie anymore");
        break;
    }
    console.log(veggieFood[i]);
}
///////////////////////////////////////////////////////////////////////////////
// we delete the none Veggie iten

for(let i=0; i< veggieFood.length; i++){

    if(veggieFood[i]=="Chicken"){
        alert(" you have chicken and your list is not veggie");
        veggieFood[i]="Lemon";
        alert("we changed the chicken to Lemon thank you!!");
       

    }

    console.log(veggieFood[i]);
}
/////////////////////////////////////////////////////////////////U
// how to delete an item from array list
let colors=["red","black","green"]
colors
delete colors[0];
color[0]="blue"