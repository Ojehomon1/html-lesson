const axios = require('axios')

// axios.get('https://reqres.in/api/users')
// .then((response)=>{
//     // success
//     console.log(response.data);
// })
// .catch(()=>{
//     // error
//     console.log(err)
// });

//--------------------------------------------------------------------------
// axios({
//     method: 'get',
//     url: 'https://reqres.in/api/users'
// })
// .then( response => { console.log(response.data)})
// .catch(err => { console.log(err)});
//---------------------------------------------------------------------------

axios({
         method: 'get',
        url: 'https://dog.ceo/api/breeds/list/all',
        params : {
            _limit : 2,
            _start: 0
        }
})
.then( response => { console.log(response.data)})
.catch(err => { console.log(err)});


