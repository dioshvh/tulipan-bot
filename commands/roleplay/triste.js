const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "triste",
  aliases: ["sad","depressed"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "demuestra que estas triste",
    usage: "triste",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** está triste`,
      `**${message.author}** está sad :c`
		];
		var randtriste2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://i.imgur.com/reooqIk.gif',
			'https://i.imgur.com/85ixpCd.gif',
			'https://i.imgur.com/TNqUrVL.gif',
			'https://i.imgur.com/mwhmLvn.gif',
			'https://i.imgur.com/iwR6J3I.gif',
			'https://i.imgur.com/vXEKOhI.gif',
			'https://i.imgur.com/Ac8E0VK.gif',
			'https://i.imgur.com/PIgQk0K.gif',
			'https://i.imgur.com/MrAg6kx.gif',
			'https://i.imgur.com/zSqTNA7.gif',
			'https://i.imgur.com/blOLZjK.gif',
			'https://i.imgur.com/oI8LNwM.gif'
		];
		var randtriste = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randtriste2)
			.setColor('RANDOM')
			.setImage(randtriste);
		await message.channel.send(embed);
	}
}