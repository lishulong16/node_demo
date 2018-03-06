const os = require('os')


console.log(os.cpus())



console.log('==============')


//cpu的字节序
console.log(os.endianness())
// 操作系统名称
console.log(os.type())
console.log(os.platform())
console.log(os.totalmem()/1024/1024/1024)
console.log(os.freemem()/1024/1024/1024)
console.log()
console.log()
console.log()