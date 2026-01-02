// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')

fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/',
    index: 'index.html',
})

// Declare a route
fastify.get('/helloworld', function handler (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: 8080 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})