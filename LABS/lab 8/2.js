const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>")
})

app.get('/contact',(req,res)=>{
    res.send("<h1>Contact Page</h1>")
})

app.get('/data',(req,res)=>{
    res.send("<h1>Data Page</h1>")
})

app.get('/service',(req,res)=>{
    res.send("<h1>Service Page</h1>")
})

app.use((req,res)=>{
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(3001,()=>{
    console.log("server start at port 3001")
})