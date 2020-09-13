const fetch = require('node-fetch');
const cheerio = require('cheerio');

module.exports = async () => {
	const res = await fetch('https://cubedcraft.com')
		.catch((err) => {throw err;});

	const $ = cheerio.load(await res.text());
	return parseInt($('div.ui.text.container > h2 > p > strong').text());
};