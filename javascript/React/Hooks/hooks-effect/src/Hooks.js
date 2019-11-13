import React , { useState , useEffect } from 'react';

function Photos() {
    const [data , setData ] = useState({});
   

    async function fetchtData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/1')
        response.json()
        .then( response => setData(response))
        .catch(err => console.log(err))
        
    }
    
    
    useEffect(() => {

        //fetchData();

})
    console.log(data.url)

    return( <div>

                <h1>the photos :</h1>

                {JSON.stringify(data)}
                    
            </div>
    )

}

export default Photos;
