const PSWrapper = require('../src/index');

async function run() {
	const servers = PSWrapper.onlineServers;

	//	Get online servers
	console.log('Online servers:', await servers.count());
	console.log('');

	//	Get top server
	const top = await servers.getTopPlayers();
	const s = await servers.get(top.id);

	console.log('Top server:', s.name);
	console.log('Player count on top server:', s.onlinePlayers);
	console.log('Votes on top server:', s.votes);
	console.log('');


	//	Get server data about warzone
	const warzone = await servers.get('Warzone');

	console.log('Warzone is official:', warzone.official);
	console.log('Players on Warzone:', warzone.onlinePlayers);
}

run();