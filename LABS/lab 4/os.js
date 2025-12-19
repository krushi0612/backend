const os = require('os')

// console.log(os.type())
// console.log(os.release())
// console.log(os.version())
// console.log(os.platform())
// console.log(os.arch())

// const a = os.totalmem()/(1024**3)
// const b = os.freemem()/(1024**3)
// console.log(a)
// console.log(b)

// console.log(os.userInfo())

const ans = os.uptime()/(3600)
console.log(ans)

// console.log(os.cpus())

// console.log(os.networkInterfaces())

// console.log(os.hostname())