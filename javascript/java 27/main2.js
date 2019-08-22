let pNumber=document.getElementById("number");
let pName=document.getElementById("name");
let saveBtn=document.getElementById("save");
let delBtn=document.getElementById("delete")

saveBtn.addEventListener("click",function(){

    localStorage.setItem(pNumber.value,pName.value);
    console.clear();
    showInfo(); 

});
;

delBtn.addEventListener("click", function(){
    localStorage.clear();

});

function showInfo(){
    let storage = localStorage;
    for(let i = 0 ; i < storage.length; i++){
        console.log(storage.key(i) + " ; " + storage.getItem(storage.key(i)) );
    }

}    
