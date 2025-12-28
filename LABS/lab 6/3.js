const fs=require("fs")
console.log("hello");
fs.writeFile('demo.txt',"welcome to world",(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("file created")
})