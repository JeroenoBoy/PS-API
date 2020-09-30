const servers = require('./groups/servers');

module.exports = {

	getPlayerCount: require('./requests/getPlayerCount'),
	servers: require('./groups/servers'),
	players: require('./groups/players'),

};