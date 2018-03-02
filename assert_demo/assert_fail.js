const assert = require('assert')


// assert.fail(1, 2, undefined, '>')


// AssertionError [ERR_ASSERTION]: 1 > 2


// assert.fail(1, 1, 'error info')
// assert.fail(12, 2, 'error info', '>')


// assert.fail()
// assert.fail('fail,error')


function suppressFrame() {
    assert.fail('a','b',undefined,'!=',suppressFrame)
}

// suppressFrame()

