// let isMomHappy = true;

// // Promise
// let willIGetNewPhone = new Promise (
//     function(resolve, reject) {
//         if(isMomHappy) {
//             let phone = {
//                 brand: "Apple",
//                 color: "black"
//             }
//             resolve(phone); // fulfilled
//         } else {
//             let reason = new Error("mom is not happy");
//             reject(reason);  // reject
//         }
//     }

// );

// // call our phone
// let askMom = function(){
//     willIGetNewPhone
//     .then(function (fulfilled) {
//     // Yah, you got a new phone    
//         console.log(fulfilled);  // -> {brand: "Apple",color: "black"}
//     })
//     .catch(function (error){
//         // oops, mom doesnt buy it
//         console.error(error.message); // -> 'mon is not happy'
//     })
// }
// askMom();

var isMomHappy = false;
       // Promise
       var willIGetNewPhone = new Promise(
           function (resolve, reject) {
               if (isMomHappy) {
                   var phone = {
                       brand: "Apple",
                       color: "black"
                   }
                   resolve(phone); // fulfilled
               } else {
                   var error = new Error("mom is not happy");
                   reject(error); // reject
               }
           }
       );
       // call our promise
       var askMom = function () {
           willIGetNewPhone
               .then(function (phone) {
                   // yay, you got a new phone
                   console.log(phone); // -> {brand: "Apple",color: "black"}
               })
               .catch(function (error) {
                   // oops, mom doesn't buy it
                   console.log(error.message); // -> 'mom is not happy'
               })
       }
       askMom();

