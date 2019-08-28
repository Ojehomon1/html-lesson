// Grabbing the elements ////////////////////////////////////////
let ressum = document.getElementById("ressum");
let ressub = document.getElementById("ressub");
let resmult = document.getElementById("resmult");
let resdiv = document.getElementById("resdiv");
let resmodu = document.getElementById("resmodu");

//////////////////////////////////////////////////////////////
// addition

let add1 = document.getElementById("add1");  //Grabbing the elment
let add2 = document.getElementById("add2"); 
add1.addEventListener("keyup",sum);
add2.addEventListener("keyup",sum);


function sum(){
    
    if(add1.value != "" && add2.value != ""){  // Error save in order to prevent error showing when no input
        ressum.value = parseInt(add1.value) + parseInt(add2.value);
    }
    else {
        ressum.value = "";
    }
};

/////////////////////////////////////////////////////////
//subtraction

let sub1 = document.getElementById("sub1");
let sub2 = document.getElementById("sub2");
sub1.addEventListener("keyup",difference);
sub2.addEventListener("keyup",difference);

function difference(){

    if(sub1.value != "" && sub2.value != ""){ // Error save in order to prevent error showing when no input
        ressub.value = parseInt(sub1.value) - parseInt(sub2.value);
    }
    else {
        ressub.value = "";
    }
};

////////////////////////////////////////////////////////////////////
//multiplication

let mult1 = document.getElementById("mult1");
let mult2 = document.getElementById("mult2");
mult1.addEventListener("keyup",multiply);
mult2.addEventListener("keyup",multiply)

function multiply(){

    if(mult1.value != "" && mult2.value != ""){  // Error save in order to prevent error showing when no input
        resmult.value = parseInt(mult1.value) * parseInt(mult2.value);
    }
    else {
        resmult.value = "";
    }
};


///////////////////////////////////////////////////////////////////////////
//division

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
div1.addEventListener("keyup",division);
div2.addEventListener("keyup",division);

function division(){

    if(div1.value != "" && div2.value != ""){  // Error save in order to prevent error showing when no input
        resdiv.value = parseInt(div1.value) / parseInt(div2.value);
    }
    else {
        resdiv.value = "";
    }

}

////////////////////////////////////////////////////////////////////////////
// Modulus

let modu1 = document.getElementById("modu1");
let modu2 = document.getElementById("modu2");
modu1.addEventListener("keyup",modulus);
modu2.addEventListener("keyup",modulus);

function modulus(){

    if(modu1.value != "" && modu2.value != ""){  // Error save in order to prevent error showing when no input
        resmodu.value = parseInt(modu1.value) % parseInt(modu2.value);
    }
    else {
        resmodu.value = "";
    }

}

