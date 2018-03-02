const assert = require('assert')
var a = undefined


assert.deepEqual(a, undefined, 'sss')

// assert(a, '123')  // a==undefined? throw error

a = 'e'

assert.deepEqual(a, 'e', 'good')

a = ""
// assert.ok(a,'ssok') //error

// assert.ok(undefined,"ss")

a = 0

// assert.ok(a) //error

assert.deepEqual(/a/gi, new Date())

const obj1 = {
    a: {
        b: 1
    }
}


const obj2 = {
    a: {
        b: 2
    }
}

const obj3 = {
    a: {
        b: 2
    }
}

// assert.deepEqual(obj1,obj2) //error
// assert.deepEqual(obj1,obj3)//error
assert.deepEqual(obj2,obj3) //ok

const obj4 = Object.create(obj1)

console.log(obj4)

// assert.deepEqual(obj1,obj4) //error

