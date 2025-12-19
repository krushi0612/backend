const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('greet',(name)=>{
      console.log(`hello, ${name}`)
})

setInterval(()=>{
     emitter.emit('greet','Krushi')
},1000)