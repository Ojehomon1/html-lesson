import React from 'react';


const ListTodo = (props)=>{
    let listOfItems;
    if(props.list.length > 0){
        listOfItems=props.list.map((item,index)=>
        <li key={index}>{item}</li>
        //<h4 key={index}>{item}</h4>  
        )
    }
    else {
        listOfItems = <p>Please add some tasks</p>
    }


    return (
        <div>
            <h1>
            {listOfItems}
            </h1>
        </div>
    )
}


export default ListTodo;

