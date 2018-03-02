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

console.log(i)