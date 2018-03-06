// 写法一
let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
func('Jack') // "Hello Jack!"

console.log(func('Jack'))

// 写法二
// let str = '(name) => `Hello ${name}!`';
// let func = eval.call(null, str);
// func('Jack') // "Hello Jack!"


let rr = '(name) => `hello ${name}`'

let funcc = eval.call(null, str)

console.log(funcc('hhh'))