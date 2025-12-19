const http = require('http')
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader("content-type",'text/html')
    if(req.url==='/'){
        res.statusCode = 200; 
        res.end("<h1>Home Page</h1>");
    }
    else if (req.url === '/about'){
        res.end("About page")
        fs.readFile('about.txt',(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(data)
            }
        })
    }
    else{
        res.statusCode = 404; 
        res.end("Page Not Found");
    }
})

server.listen(3000,()=>{
    console.log("server at port 3000")
})