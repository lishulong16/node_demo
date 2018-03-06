const fs = require('fs')



var data = 'please input your content: 哈喽'


var wirteStream = fs.createWriteStream('output.txt')


wirteStream.write(data,'utf-8')


wirteStream.end()


wirteStream.on('finish',function () {
    console.log('write finished')
})


wirteStream.on('error',function (error) {
    console.log(error.stack)
})

console.log('programming is over')

