function express() {
    let a = "hi i am strict mode function!"
    return a
}


console.log(express())


/**
 *
 * let 允许把变量的作用域限制在块级域中。与 var 不同处是：var 申明变量要么是全局的，要么是函数级的，而无法是块级的。
 * */

var a = 3
var b = 4

if (a === 3) {
    let a = 7
    var b = 18
    console.log(a)
    console.log(b)
}

console.log(a)
console.log(b)


for (let i = 0; i < 10; i++) {
    console.log(i)
}

// console.log(i)


// 暂时性死区

// var tem = 1;
//
// if(true){
//     tem = "134" //ReferenceError: tem is not defined
//     let tem
// }


if (true) {
    tem = "11"
    console.log(tem)

    // let tem //在let命令声明变量tmp之前，都属于变量tmp的“死区”。
}

typeof tem

// let tem


function die(x = y, y = 2) {
    return [x, y]
}

// die() //error

function die(x = 2, y = x) {
    return [x, y]
}

die() //error

console.log(die())


function f() { console.log('I am outside!'); }

(function () {
    if (true) {
        // 重复声明一次函数f
        let a = function f() { console.log('I am inside!'); }
        a()
    }

    f();
}());

{
    let t = f();
    t = t * t + 1;
}
// 'use strict'
// let x = do {
//     let t = f();
//     t * t + 1;
// };


// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

let [x, y, z] = new Set(['a', 'b', 'c']);

console.log(x)
console.log(y)
console.log(z)


