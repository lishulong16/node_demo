const server = require('./node_f3')

const router = require('./route')


server.start(router.route)