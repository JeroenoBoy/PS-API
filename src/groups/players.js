const fetch = require('node-fetch');

module.exports = {

	/**
	 * Get the data of a player
	 * @param {string} uuid the uuid of this player
	 */
	get: async (uuid) => {
		const { player } = await retrieveData(encodeURI(uuid));

		return player;
	},


	/**
	 * Get the Warzone stats of a player
	 * @param {string} uuid the uuid of this player
	 */
	getWarzoneStats: async (uuid) => {
		const { player } = await retrieveData(encodeURI(uuid) + '/warzone');

		return player;
	},


	/**
	 * Get the Tntwars stats of a player
	 * @param {string} uuid the uuid of this player
	 */
	getTntwarsStats: async (uuid) => {
		const { player } = await retrieveData(encodeURI(uuid) + '/tntwars');

		return player;
	},


	/**
	 * Get the Bedwars stats of a player
	 * @param {string} uuid the uuid of this player
	 */
	getBedwarsStats: async (uuid) => {
		const { player } = await retrieveData(encodeURI(uuid) + '/bedwars');

		return player;
	},
};

async function retrieveData(method = '') {
	const res = await fetch('http://api.playerservers.com/player/' + method)
		.catch((err) => {throw err;});

	return await res.json();
}