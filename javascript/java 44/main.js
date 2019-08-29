let li = document.querySelectorAll('li');
let section = document.querySelectorAll('section');
function removeAllClasses(){
   for(let x = 0; x < li.length; x++){
       // to remove all classes
       section[x].className = '';
       // to remove all classes
       li[x].className = '';
   }
}
for(let i = 0; i < li.length;i++){
   li[i].addEventListener('click',function(){
       removeAllClasses();
       // to adding a class Active
       section[i].className = 'active';
       // to adding a class selected
       li[i].className = 'selected';
   });
}
/*We use this loop function is to put a class active to the li 
 and section we have chosen  */

 /* In this case the lopp will give classes to all section and all 
    the dsata will show one ti,e to solve this pb we have to make a 
    new function to delete all the classes except the selected one 
    and call it from the first function*/



////////////////////////////////////////////////////////////////////
// Alternative solution - Using addEventlistener

 /* select all the sections and li's */
//  let li=document.querySelectorAll("li");
//  let section=document.querySelectorAll("section");
    
//     li[0].addEventListener('click',function(){
//      section[0].classList='active';
//      section[1].classList='';
//      section[2].classList='';
//      section[3].classList='';
//      section[4].classList='';
//     });
// ​
// ​
//     li[1].addEventListener('click',function(){
//      section[0].classList='';
//      section[1].classList='active';
//      section[2].classList='';
//      section[3].classList='';
//      section[4].classList='';
//     });
// ​
// ​
//     li[2].addEventListener('click',function(){
//      section[0].className='';
//      section[1].className='';
//      section[2].className='active';
//      section[3].className='';
//      section[4].className='';
//     });
// ​
//     li[3].addEventListener('click',function(){
//      section[0].className='';
//      section[1].className='';
//      section[2].className='';
//      section[3].className='active';
//      section[4].className='';
//     });
// ​
//     li[4].addEventListener('click',function(){
//      section[0].className='';
//      section[1].className='';
//      section[2].className='';
//      section[3].className='';
//      section[4].className='active';
//     });
// ​