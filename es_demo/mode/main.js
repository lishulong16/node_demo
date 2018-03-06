const hello = require('./h1')

hello.world()



const Hello = require('./hello')


new Hello.Hello().sayHello()

new Hello.World().sayWorld()


/**
 *
 * node 中存在四类模块
 *
 *
 * 原生模块 和三中文件模块
 *
 *
 *
 *http fs path
 *
 * ./mode
 * ../mode
 * /path/mode
 *
 * mode
 *
 * **/


const path = require('path')


console.log(path.normalize('mode'))
console.log(path.join())