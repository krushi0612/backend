const fs=require("fs")
console.log("hello");
fs.unlink('demo.txt',(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("file deleted ")
})