// print numbers between 1 and 100 * 9

// for(let i=1 ; i <= 100 ;i++){

//     console.log( i + " * 9 = " + i * 9);




// }
// the grade Assigner
// if the result > 89 then you get A
// if the result > 80 then you get B
// if the result > 70 then you get C
// if the result > 65 then you get D
// if the result is < 65 you get else you get F

// for(let i=0 ; i<= 100 ; i++){

//     if (i > 89) {
//         console.log(i +" you get A");
//     }
//     else if(i > 80 ) {
//         console.log(i + " you get B");
//     }
//     else if(i > 70 ){
//         console.log(i + " you get C");

//     }
//     else if(i > 65){
//         console.log(i + " you get D");
//     }
//     else {
//         console.log(i + " you get F sorry!")
//     }
// }




// displays the grade Assigner - but starting from 100 down to 1 - opposite of above
// for(let i=100 ; i>= 1 ; i--){

//          if (i > 89) {
//              console.log(i +" you get A");
//         }
//         else if(i > 80 ) {
//            console.log(i + " you get B");
//         }
//         else if(i > 70 ){
//             console.log(i + " you get C");
    
//         }
//         else if(i > 65){
//             console.log(i + " you get D");
//          }
//         else {
//             console.log(i + " you get F sorry!")
//          }
//      }

///////////////////////////////////////////////////////////////////
// one line of 10 stars

// for (let i= 0 ;i< 10 ;i++){

//     document.write('*');
// }
//////////////////////////////////////////////////////////////////////

// two lines of 10 stars
// for (let i= 1 ;i<= 20 ;i++){

//          document.write(' * ');
//          if(i==10) {
//              document.write('<br>');
//          }
// }

//////////////////////////////////////////////////////////////////////////////
//or an even better code - if you want lines of 10 stars you use
// For example print 100 stars in every line of 10 stars

// for (let i= 1 ;i<= 100 ;i++){

//     document.write(' * ');
//     if(i % 10 == 0) {
//         document.write('<br>');
//     }
// }

//////////////////////////////////////////////////////////////////////////////
//alternatively to above code you can use the code below

// for (let i= 0 ; i < 10 ;i++ ) {             // for number of rows

//     for (let c=0 ; c < 10 ; c++){           // for number of columns
//      document.write(' * ')  //to display numbers use document.write( c )
//     }

//     document.write("<br>")

// }

//////////////////////////////////////////////////////////////////////////
// i= 0
// for (let i= 1 ; i <= 5 ;i++ ) {             // for number of rows

//     for (let c=1 ; c <= 5 ; c++){           // for number of columns
//      document.write(' * ') 
//     }

//     document.write(' line number ' + 1 '<br>');

//}

/////////////////////////////////////////////////////////////////////////////
// to print a triangle of stars - using for loop, in for loop
// for (let i= 0 ; i < 4 ;i++ ) {             // for number of rows

//     for (let c=0 ;  c <=i; c++){           // for number of columns
//       document.write(' * ')  //to display numbers use document.write( c )
//   }

//    document.write("<br>");
// }


///////////////////////////////////////////////////////////////////////////////////
    // for(let i= 4 ; i > 0 ;i-- ) {             // for number of rows

    //      for (let c=0 ;  c <i; c++){           // for number of columns
    //        document.write(' * ')  //to display numbers use document.write( c )
    //    }
    
    //    document.write("<br>");
    // }

///////////////////////////////////////////////////////////////////////

//     //print triangle of starts from 4 line and 4 columns
//     for(let i= 0 ; i< 4 ; i++) {             // for number of rows

//       for (let j=i ; j<4; j++){           // for number of columns
//         document.write(' * ')  //to display numbers use document.write( c )
//     }
 
//     document.write("<br>");
//  }

///////////////////////////////////////////////////////////////////////////
// print a harsh/raute form using stars - note the spacing (space holder) and the stars

    for(let i=1 ; i<= 10 ;i++ ) {             // for number of rows
      for (let j=0; j<=4-i; j++){           // for number of columns
        alert(' j= ' + J)
          document.write(' &nbsp; ');
       
      }
      for(let c=0;c < i ;c++){
        document.write(' * ');
        alert(' c= ' + c);
      }
      alert(' i = '+i);
     document.write("<br>");
  }


