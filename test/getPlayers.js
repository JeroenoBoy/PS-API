const PSWrapper = require('../src/index');

async function run() {
	const players = PSWrapper.players;

	const id = '41043b4c-37f7-483e-b8e5-8131655289ca';

	const
		data = await players.get(id),
		warzone = await players.getWarzoneStats(id),
		tntwars = await players.getTntwarsStats(id),
		bedwars = await players.getBedwarsStats(id);

	console.log('Name:', data.username);
	console.log('Last Logout:', (new Date(data.last_logout).toUTCString()));
	console.log('');

	console.log('Warzone');
	console.log('Wool Destroyed:', warzone.wool_destroyed);
	console.log('Score:', warzone.score);
	console.log('');

	console.log('TNTWars');
	console.log('Kills:', tntwars.kills);
	console.log('Score:', tntwars.score);
	console.log('');

	console.log('Bedwars');
	console.log('beds:', bedwars.beds);
	console.log('Score:', bedwars.score);
}

run();