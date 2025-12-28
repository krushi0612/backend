const fs=require("fs")
console.log("hello");
if(fs.existsSync("data.txt")){
    console.log("true found");
    
}
else{
    console.log("false");
    
}