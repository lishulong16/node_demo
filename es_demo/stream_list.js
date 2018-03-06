const fs = require('fs')
const zlib = require('zlib')


fs.createReadStream('index.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('index.tar.gz'))

