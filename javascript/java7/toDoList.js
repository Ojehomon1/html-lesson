// // we create to do list array
// let toDoList=["Learn Javascript"];
// // the first quistion
// let userAnswer= prompt("what would you like to do?");
// while(userAnswer !=="quit"){
//    if(userAnswer=="list"){
//        console.log(toDoList);
//    }
//    else if(userAnswer=="new"){
//        let newToDo=prompt(" add new task");
//        toDoList.push(newToDo);
//    }
//    userAnswer= prompt("what would you like to do?");

// }
// console.log("Okay you close the app!!!");



let list_array = ['list1','list2','list3'];
        
while(list_array !== 'quit'){

    let todo = prompt('List || neu || quit ');

    if(todo == 'list'){
        alert('show in the colsole!');
        console.log(list_array);
    }

    else if(todo == 'new'){
        let a = prompt('Please add Element');
        list_array.push(a);
        alert("you added a new element!  press enter and write LIST again! ");
    }

    // else{
    //     todo == 'quit';
    //     console.log('goodbay');
    //     break;
    // }


}