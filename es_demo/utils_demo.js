const utils = require('util')


console.log(utils.isDate('2012-12-12'))
console.log(utils.isDate(new Date()))
console.log(Date())


console.log(utils.isError(new Error()))


function User() {
    this.name = 'lishulong'
    this.age = 23
    this.sex = 'Mr.'

    this.toString = function () {
        return `${name} - ${age}`
    }
}


var a = new User()

console.log(utils.inspect(a))
console.log(utils.inspect(a, true))


// 实现对象间原型继承的函数

function Base() {
    this.name = 'name'
    this.base = '110'

    this.sayWorld = function () {
        console.log('hello world')
    }
}


Base.prototype.showName = function () {
    console.log(this.name)
}


function Sub() {
    this.name = 'sub'
}


utils.inherits(Sub, Base)

var obj = new Base()

obj.showName()

obj.sayWorld()


console.log(obj)
console.log(new Sub())


var obb = new Sub()


obb.showName()

// obb.sayHello()
// obb.sayWorld()



