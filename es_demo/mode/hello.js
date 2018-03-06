function Hello() {

    this.sayHello = function () {
        console.log("hello world!!!")
    }
}

function World() {

    this.sayWorld = function () {
        console.log("world!!!")
    }
}


module.exports = {
    Hello,
    World
}