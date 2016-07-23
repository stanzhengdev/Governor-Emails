'use strict'

module.exports = function (server) {
	var Email = server.plugins['hapi-shelf'].model('Email')

	return [
		/*
		{
			method: 'GET',
			path: '/api/email',
			config: {
				handler: function(request, reply) {
					Email
						.fetchAll({columns: 'date'})
						.then(function(models) {
						reply(models)
						})
				}
			}
		},
		{
			method: 'GET',
			path: '/api/email',
			config: {
				handler: function(request, reply) {
					Email
						.fetchAll({columns: 'subject'})
						.then(function(models) {
						reply(models)
						})
				}
			}
		},
		{
			method: 'GET',
			path: '/api/email',
			config: {
				handler: function(request, reply) {
					Email
						.fetchAll({columns: 'senderName'})
						.then(function(models) {
						reply(models)
						})
				}
			}
		},
		*/
		{
			method: 'GET',
			path: '/api/email',
			config: {
				handler: function(request, reply) {
					Email
						.fetchAll({columns: 'recipientName'})
						.then(function(models) {
						reply(models)
						})
						.catch()
				}
			}	
		}
	]
}