var fs = require("fs");

fs.readFile('index.txt', function (err, data) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("程序执行完毕");


//event.js 文件
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.once('some_event', function(name) {
    console.log(`some_event 事件触发:${name}`);
});

setTimeout(function() {
    event.emit('some_event',1);
}, 1000);


setTimeout(function(){
    event.emit('some_event',3)
})


event.listeners(1000)


fs.stat('index.txt',function(err,stats){

    if(err){
        return console.error(err)
    }

    console.log(stats)
    console.log('read success')
    console.log(stats.isFile())
    console.log(stats.isDirectory())
})