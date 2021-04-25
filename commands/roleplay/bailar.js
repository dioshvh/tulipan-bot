const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "bailar",
  aliases: ["dance"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "demuestra tus habilidades en danza",
    usage: "bailar",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** se puso a bailar >u<`,
      `**${message.author}** le dió por bailar`,
      `**${message.author}** se puso a bailar de la nada`
		];
		var randbailar2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://media.giphy.com/media/vTqhQldEfAY6c/giphy.gif',
			'https://media.giphy.com/media/3ohzdTADgmPfS1teWk/giphy.gif',
			'https://media.giphy.com/media/4hd57A5UcVqGQ/giphy.gif',
			'https://media.giphy.com/media/HZboJ5Pkti9k4/giphy.gif',
			'https://media.giphy.com/media/EW3CTnkH6uy3K/giphy.gif',
			'https://media.giphy.com/media/YaTE7QSUtc4co/giphy.gif',
			'https://media.giphy.com/media/6k6iDdi5NN8ZO/giphy.gif',
			'https://media.giphy.com/media/GYddQzjZC0kvK/giphy.gif'
		];
		var randbailar = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randbailar2)
			.setColor('RANDOM')
			.setImage(randbailar);
		await message.channel.send(embed);
	}
}