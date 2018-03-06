console.log(__filename)


console.log(__dirname)


function printHello(){

    console.time('print')
    console.log("print hello ")

    console.timeEnd('print')
}


setTimeout(printHello,2000)



console.info("this is info")
console.error("this is error")
console.warn("this is warn")


console.dir(printHello())
//
// clearTimeout(a)


console.trace()