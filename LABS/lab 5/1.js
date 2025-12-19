const cp = require('child_process')

// cp.exec("node --version",(err,stdout,stderr)=>{
//     if(err){
//         console.log("error: ",err)
//         return;
//     }
//     if(stderr){
//         console.log("stderr: ",stderr)
//         return;
//     }
//     console.log("stdout: ",stdout)
// })

cp.exec("python pyt.py",(err,stdout,stderr)=>{
    if(err){
        console.log("error: ",err)
        return;
    }
    if(stderr){
        console.log("stderr: ",stderr)
        return;
    }
    console.log("stdout: ",stdout)
})