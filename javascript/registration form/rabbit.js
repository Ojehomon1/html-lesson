let rabbit = {};
rabbit.speak=function(speak) {
    console.log(speak);
}
rabbit.speak("I am alive");
//////////////////////////////////////////////////////////////
function speak(text){
    console.log(`the ${this.type} rabbit says ${text}`);
}
let whiteRabbit = { type : "white" ,speak} ;
let hungryRabbit = {type : "hungry" ,speak};

whiteRabbit.speak(" hello ");
hungryRabbit.speak(" I need a carrot");

speak.call(hungryRabbit ,"Hello");
//////////////////////////////////////////////////////////////

let grayRabbit = Object.create(rabbit);
grayRabbit.type="gray";
grayRabbit.speak("Hi");

///////////////////////////////////////////////////////////////
let myobj = {};
myobj.alert = function (text) {
    document.write(text);
}
///////////////////////////////////////////////////////////////
// function text(){
// }
let text = (function () {
    alert("Hello FBW3");
})();
