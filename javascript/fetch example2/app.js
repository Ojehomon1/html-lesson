let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
//let btn4 = document.querySelector("#btn4");
let addPost = document.querySelector("#addPost");

btn1.addEventListener("click", getText);
btn2.addEventListener("click", getUsers);
btn3.addEventListener("click", getPosts);
addPost.addEventListener("submit",createPost);


function getText() {
    fetch("test.txt")
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById("output").innerText=data;
    })
    .catch(function(err){
        console.log(err);
    })
}
function getUsers(){
    fetch("users.json")
    

    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let output = "<h2> Users </h2";
        data.forEach(function(user) {
            output +=`
            <ul>
                <li>${user.id} </li>
                <li>${user.name}</li>
                <li>${user.email}</li>
            </ul>
            `;

        });
        document.getElementById("output").innerHTML = output;

    })

}function getUsers(){
    fetch("users.json")
    

    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let output = "<h2> Users </h2";
        data.forEach(function(user) {
            output +=`
            <ul>
                <li>${user.id} </li>
                <li>${user.name}</li>
                <li>${user.email}</li>
            </ul>
            `;

        });
        document.getElementById("output").innerHTML = output;

    })

}


function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    

    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let output = "<h2> Posts </h2";
        data.forEach(function(post) {
            output +=`
            <div>
                <h3>${post.title} </h3>
                <p>${post.body} </p>
            `;

        });
        document.getElementById("output").innerHTML = output;

    })

}

// Async await in JS

async function getAllUsers() {

    //await response of fetch
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    //only proceed if the response is resolved
    let data = await response.json();

    //only proceed if data is resolved
    return data;

}
getAllUsers().then(function(users){

    console.log(users)
    let output = "<h2> All users from API</h2>"
    users.forEach(function(user){
        output +=`
        <div>
            <h3>${user.id} </h3>
            <p> Name : ${user.name} </p>
            <p> email : ${user.email} </p>
            <p> street: ${user.address.street} </p>
            <p> city : ${user.address.city} </p>
        </div>
        `;


    });
    document.getElementById("output").innerHTML = output;

});

function createPost(e){
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let body = document.querySelector("#body").value;
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "POST",
        headers : {
            "Accept" : "application/json , text/plain , */*",
            "Content-type" : "application/json"

        }, 
        body:JSON.stringify( {title:title, body:body, userId:400} )

    })
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
    })


}