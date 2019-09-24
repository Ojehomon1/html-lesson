document.querySelector(".get-jokes").addEventListener("click",getJokes);

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
