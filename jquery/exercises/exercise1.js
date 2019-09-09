//create a mini app that takes in a users name and returns the following:
//A greeting with the users name
//Current day
//Days left till the weekend

//Weekend calculation
var now  = new Date();
var day = now.getDay();
var showText = "";

if(day == 0 || day == 6){
    showText = "It is the weekend!";
} else {
    let diff = 6 - day;
    showText = "There are " + diff + " days left untill the weekend";
}

console.log(day);


//////////////////////////////////////////////////////////////////////////

//JQuery Part
$("#submit").click(function(){  

    var name = $("#nameInput").val();
    console.log(name)
    if(name != ""){
        $("#enterName").addClass("hide");
        $("#greeting").removeClass("hide");
        $("#yourName").text(name);
        $("#weekend").text(showText);
    } else{
        $("#enterName").removeClass("hide");
        $("#greeting").addClass("hide");
    }
});

// This is the same in Javascript
//  var btn = document.getElementById("submit");
//  var input = document.getElementById("nameInput");
//  var paraEnter = document.getElementById("enterName");
//  var paraGreeting = document.getElementById("greeting");
//  var spanName = document.getElementById("yourName");
//  btn.addEventListener("click", function(){
//     var name = input.value;
//     if(name != "" ){
//         paraEnter.classList.add("hide");
//         paraGreeting.classList.remove("hide");
//         spanName.innerHTML = name;
//     } else {
//         paraEnter.classList.remove("hide");
//      paraGreeting.classList.add("hide");
//   }
//  });
