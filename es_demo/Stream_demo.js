// stream 是一个抽象接口。node 中有很多对象实现了这个接口

//stream 有四种流类型

//readable 可读操作

/***
 *
 * readable 可读操作
 *
 * writable 可写操作
 *
 *duplex 可读可写操作
 *
 * transform 操作被写入数据，然后读出结果
 *
 * */


/****
 *
 * data 当数据可读时触发
 *
 * end 没有更多的数据时触发
 *
 * error 在接受和写入过程中发生错误时触发
 *
 * finish 所有数据已经被写入到底层系统时触发
 *
 *
 * **/

const fs = require('fs')


var data = ''


var readStream = fs.createReadStream('index.txt1');

readStream.setEncoding('Utf-8')

readStream.on('data', function (chunck) {
    data += chunck
})


readStream.on('end',function () {
    console.log(data)
})


readStream.on('error',function (error) {
    console.log(error.stack)
})

console.log('programming is over')



