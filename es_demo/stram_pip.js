const fs = require('fs')


var readStream = fs.createReadStream('index.txt')

var writeStram = fs.createWriteStream('output1.txt')


readStream.pipe(writeStram)

