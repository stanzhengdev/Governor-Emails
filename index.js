'use strict'

const Hapi = require('hapi')
const HapiShelf = require('hapi-shelf')

const server = new Hapi.Server()
server.connection({ port: 3000 })

module.exports = server

// Connect to DB
server.register(
	{
		register: HapiShelf,
		options: {
			knex: {
				client: 'sqlite',
				connection: {
					filename: "./kaine_email.db"
				}
			},
			plugins: ['registry'],
			models: ['./api/models/Email']
		}
	},
	function(err) {
		if (err) {
			throw err
		}
	}
)

// Add routes
server.route({
	method: 'GET',
	path: '/',
	config: {
		handler: function(request, reply) {
			return reply('Hello World')
		}
	}
})

const EMAIL_ROUTE = require('./api/controllers/Email')
server.route(EMAIL_ROUTE(server))


// Start server
server.start((err) => {

    if (err) {
        throw err
    }
    console.log('Server running at:', server.info.uri)
})
