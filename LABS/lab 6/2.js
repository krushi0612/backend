const fs=require("fs")
console.log("Start");
try{
    data=fs.readFileSync('data.txt','utf-8');
    console.log(data);
}catch(err){
    console.log(err);
}
console.log("End")