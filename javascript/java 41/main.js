let form = document.querySelector("#task-form");
let taskInput = document.querySelector("#task");
let taskList = document.querySelector("#task-list");


loadeventListener();
function loadeventListner(){
    // the submit event
    form.addEventListener("submit",addTask);

    // remove task event
    taskList.addEventListener("click",removeTask);

}





function addTask(e){
    e.preventDefault();
    if(taskInput.value !=""){
    let h5 = document.createElement("h5");
    let taskText = document.createTextNode(taskInput.value);
    h5.appendChild(taskText);
    taskList.appendChild(h5);
    taskInput.value="";
    let delBtn = document.createElement("button");
    delBtn.innerText="X";
    delBtn.className="delete btn btn-danger ml-5";
    h5.appendChild(delBtn);
}
else {alert("please add a task");
    }
}
function removeTask(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }

}

function storeToLocalStorage(task){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
        
    }

}