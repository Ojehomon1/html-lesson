const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// Set Static path
app.use(express.static(path.join(__dirname, 'public')))

app.get('/users',(request, response)=>{
    let users = [
        {
            first_name : "John",
            last_name : "Doe",
            age: 45,
            job : "React developer"
        },
        {
            first_name : "Tom",
            last_name : "Jack",
            age: 35,
            job : "PHP developer"
        },
        {
            first_name : "Ronny",
            last_name : "Smith",
            age: 22,
            job : "Node js developer"
        },
        {
            first_name : "Lara",
            last_name : "Roberts",
            age: 30,
            job : "Vue js developer"
        },
    ];
    response.json(users)

})
app.get('/download',(request,response)=>{
    response.download(path.join(__dirname,'downloads/file.pdf'))
})
app.post('/subscribe',(request, response)=>{

    let name = request.body.name;
    let email = request.body.email;
    console.log(name + ' has subscribed with '+ email);
})
//redirect to a html page
app.get('/about', (request, response)=>{
    response.redirect('/about.html')
})
app.listen(3333, ()=>{
    console.log('Server started on port 3333');

})

