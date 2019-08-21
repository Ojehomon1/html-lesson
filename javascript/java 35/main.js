// function incr() {
//    // return 10;
// }

// var res = incr(3);
// console.log(res);
// ///////////////////////////////////////////////////////////////
// function incr(n) {
//     // return 10;
//     return n += 1;
//  }
 
//  var res = incr(3);  //4
//  console.log(res);

 ///////////////////////////////////////////////////////////////
 
//  var n = 20;

//  function makeCounter(n) {
//      //var n = 10;
//     function incr() {
//          return n += 1;
//     }

//    return incr();
//  }
 
//  var res = makeCounter(5); // 5
//  console.log(res);

/////////////////////////////////////////////////////////////////

// function makeCounter(n) {
//    function incr(m) {
//         return n += m;
//    }

//   return incr // changes are here
// }

// var res = makeCounter(5)(3); // 4
// console.log(res);
/////////////////////////////////////////////////////////////////

// CLOSURE
// function makeCounter() {
//     var currentValue = 0
//         return function() {
//          return currentValue++;
//     }
//  }
 
//  var counter = makeCounter();
//  console.log(counter());  //--------------
//  console.log(counter()); 


/////////////////////////////////////////////////////////////////

// function makeMult() {
//     var currentValue = 2;
//         return function() {
//          return currentValue *= 2;
//     }
//  }
 
//  var counter = makeMult();
//  console.log(counter());  //--------------
//  console.log(counter()); 
//  console.log(counter()); 
//  console.log(counter());
 
/////////////////////////////////////////////////////////////////////
// function makeMult() {
//     var currentValue = 2;
//         return function() {
//          return currentValue *= 2;
//     }
//  }
 
//  var mult = makeMult();
//  console.log(mult());  //--------------4
//  console.log(mult());  // -------------8

 //////////////////////////////////////////////////////////////////////

 function makeCounter() {
    // var currentValue = 1;
    //     return function() {
    //      return currentValue++;  //try it ++c and with c++
    // }
    function incr(){
        return incr.currentValue++;
    }
    incr.currentValue = 1;
    return incr;
 }



 var counter = makeCounter();
 counter.currentValue = 5 // please start with 5
 console.log(`counter #1:  ${counter()}`);  //---------1
 console.log(`counter #1:  ${counter()}`);  //---------1


var counter2 = makeCounter();
console.log(`counter #2:  ${counter2()}`);  //---------1
console.log(`counter #1:  ${counter2()}`);  //---------3

///////////////////////////////////////////////////////////////////////

function makeMult() {
        
    function incr(){
       
           return incr.currentValue ++;
      }
      incr.currentValue = 3;
      return incr;
    }
     
     var counter = makeMult();
    counter.currentValue = 5
    console.log(`counter #1:  ${counter()}`);  //---------1
    console.log(`counter #1:  ${counter()}`);  //---------1

    var counter2 = makeMult();
    console.log(`counter #2:  ${counter2()}`);  //---------1
    console.log(`counter #1:  ${counter2()}`);  //---------3



   