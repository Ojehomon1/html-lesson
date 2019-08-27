let fInput= document.getElementById("firstInput");

let sInput=document.getElementById("secondeInput");

let unit = document.getElementById("unit");

let labels = document.querySelectorAll("label");


unit.addEventListener("change",unitSelect);

function kmConverter(){
    let kmresult=fInput.value * 0.621371;
    sInput.value = kmresult;
}
function mileConverter(){
    let mileResult = sInput.value * 1.60934;
    fInput.value = mileResult;
}
function cmConverter(){
    let cmResult = fInput.value * 0.393701;
    sInput.value=cmResult;

}
function inConverter(){
  let inResult = sInput.value * 2.54;
  fInput.value = inResult;
}
function ceConverter(){
    let ceResult = fInput.value * 33.8;
    sInput.value=ceResult;
}
function faConverter(){
    let faResult = sInput.value * -17.2222;
    fInput.value = faResult;
}
// c = (f-32) * 5/9
// f = 32 + (c * 9/5)



// the select onchange 
function unitSelect(){
    console.log(unit.value);
    switch(unit.value){
        case "cm-inch":
            fInput.addEventListener("keyup",cmConverter);
            sInput.addEventListener("keyup",inConverter);
            labels[1].innerHTML="from CM";
            labels[2].innerHTML="from Inch";
          
        console.log("cm-inch");
        break;
        case "km-mile":
            fInput.addEventListener("keyup",kmConverter);
            sInput.addEventListener("keyup",mileConverter);
            labels[1].innerHTML="from KM";
            labels[2].innerHTML="from Mile";           

    }
}