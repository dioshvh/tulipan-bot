const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "llorar",
  aliases: ["cry"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "indica que estas llorando",
    usage: "llorar",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** se puso a llorar :C`,
      `**${message.author}** le dió por llorar`,
      `**${message.author}** esta llorando :c`
		];
		var randllorar2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif',
			'https://media.giphy.com/media/mvRwcoCJ9kGTS/giphy.gif',
			'https://media.giphy.com/media/ShPv5tt0EM396/giphy.gif',
			'https://media.giphy.com/media/AI7yqKC5Ov0B2/giphy.gif',
			'https://media.giphy.com/media/OuKTQaitZH8Y/giphy.gif',
			'https://media.giphy.com/media/4smXTnnqlS2ys/giphy.gif',
			'https://media.giphy.com/media/4smXTnnqlS2ys/giphy.gif',
			'https://media.giphy.com/media/b5z9pHJxxcREI/giphy.gif',
			'https://media.giphy.com/media/on9LDLF5JskaQ/giphy.gif',
			'https://media.giphy.com/media/4pk6ba2LUEMi4/giphy.gif'
		];
		var randllorar = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randllorar2)
			.setColor('RANDOM')
			.setImage(randllorar);
		await message.channel.send(embed);
	}
}