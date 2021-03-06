const express = require('express');
const mysql = require('mysql');
const app = express();
app.listen('3000', ()=> {
    console.log('Server started on port 3000');
})
app.get('/', (req,res)=>{
    res.send('<h1>Hello</h1>')
})
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'natalie'
});
db.connect((err)=> {
    if(err){
        throw err;
    }
    console.log('Mysql connected')
})
// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'create database natalie';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        res.send('Database created....')
    })
})
// create table
app.get('/createpoststable', (req,res)=>{
    let sql = 'CREATE TABLE posts  (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255),PRIMARY KEY(id))'
    db.query(sql , (err , result)=>{
        if(err) throw err;
        console.log(result);
        res.send('posts table created...');
    })
})

// insert post 1
app.get('/addpost1',(req,res)=>{
    //let post = { title : "the title one "  , body: "this is the body of the post 1 "  };
    let sql = "insert into posts (id , title , body) VALUES (NULL,'title 8 ', 'body of title 8') ";
    let query = db.query( sql ,(err , result) => {
        if(err) throw err
        console.log(result);
        res.send('Post 8 added');
    })
})

// insert post 2
app.get('/addpost2' ,(req,res)=>{
    let post = { title : "the title two "  , body: "this is the body of the post 2 "  };
    let sql = 'insert into posts set ?';
    db.query(sql ,post ,(err , result)=>{
        if (err) throw err;
        console.log(result);
        res.send('<h3>post 2 added </h3>');
    })
});

// select posts
app.get('/getposts' , (req, res)=>{
    let sql = 'select * from posts';
    db.query(sql ,(err , result) =>{
        console.log(result);
        res.send('Posts fetched')
    })
})

// select single post
app.get('/getpost/:id' , (req,res)=>{
    let sql = `select * from posts where id = ${req.params.id} `;
    db.query(sql , (err , result)=> {
        if (err) throw err;
        console.log( result);
        res.send('Post fetched')
    })
})

// update post
app.get('/updatepost/:id' ,(req,res)=> {
    let newTitle = 'updated title';
    let sql = `update posts set title = '${newTitle}' ,body='new body data'  where id = ${req.params.id}`;
    db.query(sql, (err , result)=>{
        if (err) throw err;
        console.log( result);
        res.send('Post updated....')
    })
})

// Delete Post
app.get('/deletepost/:id', (req,res)=>{
    let sql = `delete from posts where id = ${req.params.id}`;
    db.query(sql, (err , result)=>{
        if(err) throw err ;
        console.log(result);
        res.send('Post deleted....')
    })
})