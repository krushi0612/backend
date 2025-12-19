const url = require('url')

const path = "http://www.demo.com/path/path_1/path_2?name=krushi&age=19&city=jamnagar"

const myURL = new URL(path)

console.log("protocol: ",myURL.protocol)

console.log("hostname: ",myURL.hostname)

console.log("pathname: ",myURL.pathname)

console.log("query parameters: ")

myURL.searchParams.forEach((value,key)=>{
    console.log(`${key}: ${value}`)
})