const fs=require("fs")
console.log("hello");
fs.mkdir('my-data',(err)=>{
    if(err){
        if(err.code==='EEXIST'){
            console.log("already exsits")
        }
        else{
            console.log("error creating folder");
            
        }
    }
    console.log("folder created ")
})