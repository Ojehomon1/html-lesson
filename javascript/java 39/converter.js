let fInput = document.getElementById("firstInput");

let sInput = document.getElementById("secondInput");

fInput.addEventListener("keyup",kmConverter);
sInput.addEventListener("keyup",mileConverter);

function kmConverter(){
    let kmresult = fInput.value * 0.621371;
    sInput.value = kmresult;
}

function mileConverter(){
    let mileResult = sInput.value * 1.60934;
    fInput.value = mileResult;
}