const express = require('express')
const fs = require('fs');

const app = express()

app.get('/',(req,res)=>{
    res.statusCode = 200; 
    res.send("<h1>Home Page</h1>");
})

app.get('/about',(req,res)=>{
   res.send("<h1>About page</h1>")
        fs.readFile('about.txt',(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(data.toString())
            }
        })
})

app.get('/contact',(req,res)=>{
    res.send("<h1>Contact Page</h1>")
    fs.readFile('contact.txt',(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(data.toString())
            }
        })
})

app.use((req,res)=>{
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(3001,()=>{
    console.log("server start at port 3001")
})