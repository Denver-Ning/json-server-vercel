// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')

const server = jsonServer.create()


const router = jsonServer.router('jobs.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}))
server.use(router)
server.listen(8000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
