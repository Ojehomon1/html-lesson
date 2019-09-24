document.querySelector(".get-jokes").addEventListener("click",getJokes);
document.querySelector(".fetch-jokes").addEventListener("click",fetchJokes);

function getJokes(e){
    
e.preventDefault();
    let number = document.querySelector("#number").value;
    console.log(number);
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload = function(){
        if(this.status===200){
           // alert(this.status);
            let response = JSON.parse(this.responseText);
            console.log(response);
            let output = " ";
            if(response.type === "success"){
                response.value.forEach(function(item){
                    output += `<li>${item.joke}</li>`;


                })
                document.querySelector(".jokes").innerHTML  = output;
            }
        }
    }
    xhr.send();
}


function fetchJokes(){
    e.preventDefault();
    let output = "<h3>fetch jokes</h3>";
    let number = document.querySelector("#number").value;
    console.log(number);
    


}
    // ​
    //     getAllUsers().then(function(users) {
    // ​
    //         console.log(users);
    //         let output = "<h2 class='text-primary mt-4'> All users from API </h2>";
    //         users.forEach(function(user){
    //             output += `
    //             <div class="card card-body mb-4 " >
    //                <h3 class=""> ${user.id} </h3>
    //                <p> Name : ${user.name} </p>
    //                <p> email : ${user.email} </p>
    //                <p> street : ${user.address.street} </p>
    //                <p> city : ${user.address.city} </p>
    //             </div>
    //             `; 
    //         });
    //         document.getElementById("output").innerHTML = output;
           
    //        });
    // }
    // ​
    // function createPost(e) {
    //     e.preventDefault();
    //     let title = document.querySelector("#title").value;
    //     let body = document.querySelector("#body").value;
    //     fetch("https://jsonplaceholder.typicode.com/posts",{
    //         method : 'POST',
    //         headers : {
    //             'Accept' : 'application/json , text/plain , */*',
    //             'Content-type':'application/json'
    //         },
    //         body:JSON.stringify( { title:title, body:body, userId:400} )
    // ​
    //     })
    //     .then(function(res){
    //         return res.json();           
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //       })
    // ​
        
    // ​
    //   }