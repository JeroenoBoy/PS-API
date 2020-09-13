const fetch = require('node-fetch');

module.exports = {

	/**
	 * Amount of servers online
	 */
	count: async () => {
		const { server_count } = await retrieveData();
		return server_count;
	},

	/**
	 * Get a list of all servers by their name
	 */
	getOnline: async () => {

		const { servers } = await retrieveData();

		return servers.map(e => e.name);
	},

	/**
	 * Get a list of all online servers by their id
	 */
	getOnlineById: async () => {

		const { servers } = await retrieveData();

		return servers.map(e => e.id);
	},

	/**
	 * Get top server by players
	 */
	getTopPlayers: async () => {
		const { servers } = await retrieveData();

		return servers
			.sort((a, b) => b.onlinePlayers - a.onlinePlayers)[0];
	},

	/**
	 * Get the data of a server by its id
	 * @param NameOrID name or id of the server
	 */
	get: async (NameOrID) => {
		const data = await retrieveData('/server/' + encodeURI(NameOrID));

		return data.server;
	},

	/**
	 * Get all of the retrieved data
	 */
	all: async () => {
		return await retrieveData();
	},
};


async function retrieveData(method = '/servers') {
	const res = await fetch('http://api.playerservers.com' + method)
		.catch((err) => {throw err;});

	return await res.json();
}