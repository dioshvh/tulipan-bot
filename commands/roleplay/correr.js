const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "correr",
  aliases: ["run"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "corre , run!!",
    usage: "correr",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** se puso a correr`,
      `**${message.author}** le dió por correr`,
      `**${message.author}** hechó a correr`
		];
		var randcorrer2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://media.giphy.com/media/xmJO7iLZCcvqo/giphy.gif',
			'https://media.giphy.com/media/l3nFoSz2dEzXUMamA/giphy.gif',
			'https://media.giphy.com/media/VeyCyriTsxn3i/giphy.gif',
			'https://media.giphy.com/media/BpDYodBlBXFIs/giphy.gif',
			'https://media.giphy.com/media/w1O4I9ggVwe76/giphy.gif',
			'https://media.giphy.com/media/l0NwF1dnk7GRz3pK0/giphy.gif',
			'https://media.giphy.com/media/q7ghjrKpGeMda/giphy.gif',
			'https://media.giphy.com/media/26BRzj7sAEV1nQ3Be/giphy.gif',
			'https://media.giphy.com/media/ZUEVCzp1WVCNi/giphy.gif',
			'https://media.giphy.com/media/4Zlghkl7yULXW/giphy.gif',
			'https://i.imgur.com/qyRDMLK.gif',
			'https://i.imgur.com/wxiuYaM.gif',
			'https://i.imgur.com/NWAyvs5.gif'
		];
		var randcorrer = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randcorrer2)
			.setColor('RANDOM')
			.setImage(randcorrer);
		await message.channel.send(embed);
	}
}