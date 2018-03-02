/**
 const这个声明创建一个常量,可以全局或局部的函数声明。

 一个常量可以是全局的或者是局部的,常量遵循与变量相同的作用域规则。

 一个常量不可以被重新赋值,并且不能被重复声明.所以,虽然可以在声明一个常量的时候不进行初始化,但这样做是没有意义的,因为这个常量的值永远会保持undefined。

 一个常量不能和它所在作用域内的其他变量或函数拥有相同的名称。
 * */


const num = 10

// var num = 100  //SyntaxError: Identifier 'num' has already been declared


function demo() {
    a = '1'

    // var a = '2'
    let b = '2'
    console.log(a)
    console.log(b)
}

demo()
//
// console.log(a)
// console.log(b)

import 'aseert'

aseert.deepEqual("1","1")