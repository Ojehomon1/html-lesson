import React ,{ useState , useEffect} from 'react';

function Photos() {
    const [data , setData ] = useState([]);

    async  function fetchData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/')
        response.json()
        .then( response => setData(response))
        .catch(err => console.log(err) )
        
    }

    useEffect ( () => {

  

        fetchData();
     



    } ,[])
    console.log(data)
    let allData = data.map((item)=>{

        return <li key={item.id}>
                 <img src ={item.url} />
               </li>
    } )   
    
    return( <div>

             <h1>the photos : </h1>
             <ul>
                {allData}
             </ul>

              

            </div>
          )

}


export default Photos;

