const PSWrapper = require('../src/index');

async function run() {
	const then = Date.now();
	console.log(
		await PSWrapper.getPlayerCount(),
	);

	console.log(Date.now() - then);
}

run();