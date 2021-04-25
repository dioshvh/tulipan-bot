const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "saludar",
  aliases: ["hola","saludo"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "saluda a todos",
    usage: "saludar",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** nos está saludando`,
      `**${message.author}** nos manda saludos`
		];
		var randsaludar2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://media.giphy.com/media/l378osiVpJgJ3BKP6/giphy.gif',
			'https://media.giphy.com/media/xpgpXaXaDgvJK/giphy.gif',
			'https://media.giphy.com/media/8lpf5uITi8Dmg/giphy.gif',
			'https://media.giphy.com/media/VUC9YdLSnKuJy/giphy.gif',
			'https://media.giphy.com/media/3ov9jIYPU7NMT6TS7K/giphy.gif',
			'https://i.imgur.com/gnZwYh8.gif',
			'https://i.imgur.com/yQsS0qC.gif',
			'https://i.imgur.com/lyJZdFO.gif',
			'https://i.imgur.com/3y1ja39.gif',
			'https://i.imgur.com/PfqkTMb.gif',
			'https://i.imgur.com/AbbnWUD.gif',
			'https://i.imgur.com/2HQ0DWX.gif',
			'https://i.imgur.com/0YMQW1u.gif'
		];
		var randsaludar = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randsaludar2)
			.setColor('RANDOM')
			.setImage(randsaludar);
		await message.channel.send(embed);
	}
}