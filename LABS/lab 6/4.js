const fs=require("fs")
console.log("hello");
fs.appendFile('demo.txt',"appended text to file ",(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("data appended")
})