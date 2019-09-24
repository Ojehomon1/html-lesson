let photos = document.getElementById("btn1");

btn1 = document.addEventListener("click",getPhotos)

function getPhotos(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    

    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let output = "<h2> Users </h2";
        // data.forEach(function(photo) {
        //     output +=`
        //     <ul>
        //         <li>${photo.id} </li>
        //         <li>${photo.title}</li>
        //         <li><img src='${photo.url}'></li>
        //     </ul>
        //     `;

        // });
        for(let i = 0; i < 10; i++){

            output +=`
             <ul>
                 <li>${data[i].id} </li>
                 <li>${data[i].title}</li>
                <li><img src='${data[i].thumbnailUrl}'></li>
            </ul>
            `;
        }


        document.getElementById("output").innerHTML = output;

    })

}