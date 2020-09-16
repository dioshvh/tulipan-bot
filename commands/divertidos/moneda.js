const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "moneda",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "lanza una moneda [cara/cruz]",
    run: async (client, message, args) => {	
  	function doRandHT() {
			var rand = [
				'<a:giphy:733269845898166283> CARA!',
				'<a:giphy:733269845898166283> CRUZ!'
			];
		return rand[Math.floor(Math.random() * rand.length)];
		}
  	function doLanz() {
			var rand = [
				'Se lanzó la moneda y salió...',
				'Hmmm salió...',
        'Salió...'
			];
		return rand[Math.floor(Math.random() * rand.length)];
		}
		const embed = {
			title: doLanz(),
			description: doRandHT(),
			color: 'RANDOM'
		};
		message.channel.send({ embed });
	}
}