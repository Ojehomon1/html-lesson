// const axios = require('axios');
// const wordId = 'happy';
// const fields = 'definitions';
// const strictMatch = 'false'

// const options = {
//     url: 'https://od-api.oxforddictionaries.com/api/v2',
//     port: '443',
//     path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
//     method: "GET",
//     headers: {
//       'app_id': app_id,
//       'app_key': app_key,
//       'language': en-gb,
//       'wordId': happy,
        
//     }
//   };

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

const axios = require('axios');
const wordId = 'happy';
let language = "en-us";
axios({
    method: 'get',
    url: `https://od-api.oxforddictionaries.com:443/api/v2/entries/${language}/${wordId}`,
    headers: {
        app_id: 'c17d5770',
        app_key: '7cbd17076a2766a86a329cc3d9414ddf',
    }
})
    .then(response => {
        let definition = response.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions
        console.log(definition) 

        let senses = response.data.results[0].lexicalEntries[0].entries[0].senses
        senses.forEach((item, index)=>{
            console.log(index+': '+item.definitions)
        })
    })
    
    .catch(err => {
        console.log(err);
    });

