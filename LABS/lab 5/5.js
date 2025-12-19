const url = require('url')

const path = "http://www.demo.com"

const myURL = new URL(path)

myURL.pathname = "/path/path_1/path_2"

myURL.searchParams.append("name","Krushi")
myURL.searchParams.append("age","19")
myURL.searchParams.append("city","jamnagar")

console.log(myURL.toString())