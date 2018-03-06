const http = require('http')

const url = require('url')

function start(route) {
    function onResquest(request, response) {
        var path_name = url.parse(request.url).pathname

        console.log(`request path: ${path_name} `)

        route(path_name)
        response.writeHead(200, {'Content-Type': 'text/plain'})

        response.write(JSON.stringify("{msg:'hello'}"))

        response.end()
    }


    http.createServer(onResquest).listen(8888)

    console.log("server has started")
}


exports.start = start


