const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "enfadar",
  aliases: ["enfadado","enfadada","molesto","molesta"],
  category: "<:dash_logo:832271934775361606> reacciones ",
    description: "reaccion de enfado",
    usage: "enfadar",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** siente mucha molestia >-<`,
      `**${message.author}** se ha enfurecido!!!`,
      `**${message.author}** está muy enfadad@!!!`
		];
		var randenfadar2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://media.discordapp.net/attachments/399448944889036801/733359659813044304/desconocido.gif',
			'https://media.discordapp.net/attachments/399448944889036801/802928055910662175/ed265c109bedfa3e46d0c7e723d60181.gif',
			'https://media.discordapp.net/attachments/399448944889036801/723652041993355284/2b5163af-53cb-4726-8a76-32c0d8ac375b.gif',
			'https://media.discordapp.net/attachments/399448944889036801/775851574823092254/Angry.gif',
			'https://images-ext-2.discordapp.net/external/94ZdHEuRFmpV3XNox5hmQtJZlSR0-WktqYCQuV2ZpiY/https/imgur.com/aJWTQiK.gif',
			'https://media.discordapp.net/attachments/399448944889036801/809062466087682108/12870.gif',
			'https://media.discordapp.net/attachments/399448944889036801/752881334313287760/dd0acd63-6c65-4c2a-8501-6042d5dded87.gif',
			'https://images-ext-1.discordapp.net/external/QHZFZlLCZi4r9wZOJoFBvANZH3nid0CVHEYStRQ9G6M/https/imgur.com/q59E1sF.gif',
      'https://media.discordapp.net/attachments/399448944889036801/810657805169328148/62017f4712e28eeae2e9972847da025a.gif',
      'https://media.discordapp.net/attachments/399448944889036801/608645388773228545/angry.gif'
		];
		var randenfadar = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randenfadar2)
			.setColor('RANDOM')
			.setImage(randenfadar);
		await message.channel.send(embed);
	}
}