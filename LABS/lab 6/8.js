const fs=require("fs")
console.log("hello");
fs.copyFile('data.txt','demo.txt',(err)=>{
        if(err){
        console.log(err)
        return;
    }
    console.log("file data copied ")
})