import asserts from 'assert'
const assert = asserts
const a = []

a.push('111')

// const fool = Object.freeze(a)
// a.push('222')
// a.length = 0
// console.log(a)


// console.log(fool)

var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, i) => {
        if (typeof obj[key] === 'object') {
            console.log(key)
            console.log(i)
            constantize(obj[key]);
        }
    });
};

constantize(a)

// a.push('222')


console.log(Object.keys(a))
console.log()
Object.keys(a).forEach((index, bean) => {
    console.log(index)
    console.log(a[bean])
})

a.forEach(b => {
    console.log(b)
})



assert.equal('a','b')