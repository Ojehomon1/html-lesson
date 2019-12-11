const express = require('express');
const path = require('path');
const app = express();
const members = require('./members');
const logger = require('./middleware/logger');
const api = require('./routes/api/allMembers')

//our middleware
app.use(logger);

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/members',api)

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','about.html'));

})

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/allMembers'));

const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{
    console.log(` server start at port ${PORT}`);

})
