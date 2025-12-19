const express = require('express')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/users/:id',(req,res)=>{
    res.send(req.params.id)
})

app.post('/register',(req,res)=>{
     const {name,email,password} = req.body;
     res.send(`Name:${name}, Email:${email}, Password:${password}`)
})

app.get('/users',(req,res)=>{
    res.send(req.query)
})

app.use((req,res)=>{
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(3001,()=>{
    console.log("server start at port 3001")
})