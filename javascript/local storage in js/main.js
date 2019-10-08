let field = document.querySelector("#field");

field.addEventListener("change",autosave);

//Happen when we change text in our input
function autosave(){
  let save =  localStorage.setItem("save", field.value)

    // Happen at beginning
}
if (localStorage.getItem("save")){
    field.value = localStorage.getItem("save");
}