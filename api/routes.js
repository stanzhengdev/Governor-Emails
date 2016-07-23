'use strict'

module.exports = (server) => {
	const API_Routes = [].concat(
		require('./controllers/Email')(server)
	)
}