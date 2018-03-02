const assert = require('assert');


// assert.doesNotThrow(
//     () => {
//         throw new Error('erro info')
//     },
//     Error,
//     'llllllllllllll'
// )


assert.equal('1', '1')
assert.equal(1, '1')
// assert.equal(1,'2')
assert.deepStrictEqual({a: {b: 1}}, {a: {b: 1}})
assert.equal({a: {b: 1}}, {a: {b: 1}})


