//openweather api key e88d39af97d85fa360745922fec785bc

const request = require('request');
const axios = require('axios');


// request(link, { json: true }, (err, res, data) => {
//     // error handler
//     if(err) {
//         return console.log(err);
//     }
//     //console.log(res)
//     console.log(data);
// });

//using axios
let key = '986929d48b2233c095fc5055a31691f3';
let link = 'http://api.openweathermap.org/data/2.5/weather?q=Hamburg&appid=';
axios.get(link+key).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error)
})