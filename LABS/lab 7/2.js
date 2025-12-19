const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.statusCode = 200; 
        res.end("Home Page");
    }
    else if (req.url === '/about'){
        res.statusCode = 200; 
        res.end("About Page");
    }
    else if (req.url === '/contact'){
        res.statusCode = 200; 
        res.end("Contact Page");
    }
    else if (req.url === '/service'){
        res.statusCode = 200; 
        res.end("Service Page");
    }
    else if (req.url === '/data'){
        res.statusCode = 200; 
        res.end("Data Page");
    }
    else{
        res.statusCode = 404; 
        res.end("Page Not Found");
    }
})

server.listen(3000,()=>{
    console.log("server at port 3000")
})