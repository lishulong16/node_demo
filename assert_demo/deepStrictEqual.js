const assert = require('assert')

assert.deepEqual({a: 1}, {a: 1})
assert.deepEqual({a: 1}, {a: '1'})


console.log(1 == '1')
console.log(1 === '1')


// assert.deepStrictEqual({a: 1}, {a: '1'}) //error


const date = new Date()

const obj = {}

const fakeDate = {}

Object.setPrototypeOf(fakeDate, Date.prototype)


// assert.deepStrictEqual(obj,fakeDate) //error
assert.deepEqual(obj, fakeDate) //true

assert.deepEqual(date, fakeDate)
// assert.deepStrictEqual(date,fakeDate) //error

// assert.deepStrictEqual(new Number(1),new Number(2))
//==?
assert.deepEqual(new Number(1), new Number(2))

// ===   ?
assert.deepStrictEqual(new String('fools'), new String('fools'))
assert.deepStrictEqual(new String('fools'), Object('fools'))


assert.deepEqual('a', 'a')



