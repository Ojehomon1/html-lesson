// const axios = require('axios');

// axios({
//     url: 'https://newsapi.org/v2/everything',
//     method: 'get',
//     params: {
//         apikey:'cdd5d94ded8f42c09f4ef6769cad084a',
//         q:'bitcoin'
//     }
// })
// .then( response => console.log(response.data) )
// .catch(error => console.log(error));

const NewsApi = require('newsapi') ;
const newsapi = new NewsApi('cdd5d94ded8f42c09f4ef6769cad084a');

newsapi.v2.topHeadlines({
    
    q:'technology'
   

})
.then( response => console.log(response))
.catch(error => console.log(error));