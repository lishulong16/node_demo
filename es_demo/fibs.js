function* fibs() {
    let a = 0
    let b = 1
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }

}


let [first, second, third, fourth, fifth, sixth] = fibs()

console.log(sixth)
console.log(fifth)


// let [x = 2] = [undefined]
//
// console.log(x)
//
// let { foo: foo, bar: bar } = { foo: "aaa" };
//
// console.log(foo)
// console.log(bar)


let {foo: baz, bar: foo} = {foo: "aaa", bar: "bbb"};

console.log(baz)
console.log(foo)


// let {foo: {bar}} = {baz: 'baz'}


let a = [[1, 2], [3, 4]].map(([a, b]) => a + b);

console.log(a)
