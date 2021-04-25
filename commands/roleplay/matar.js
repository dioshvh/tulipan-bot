const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "matar",
  aliases: ["kill","asesinar"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "mata a un usuario",
    usage: "matar <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<a:uncheck_raveninha:832234474883645460> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("No lo hagas :c");

		var list = [
			`**${message.author}** mató a **${user.username}** :0`,
      `**${message.author}** se cargó a **${user.username}** :0`,
      `**${message.author}** terminó con **${user.username}** :0`
		];
	  var randkill2 = list[Math.floor(Math.random() * list.length)];

    var list = [
			'https://media3.giphy.com/media/BTV1vUcOWht2U/giphy.gif',
			'https://media2.giphy.com/media/naUZK0qL0ENAA/giphy.gif',
			'https://media.giphy.com/media/V4uJfpqjwqp3i/giphy.gif',
			'https://media0.giphy.com/media/znPZLc1uqP4uA/giphy.gif',
			'https://media.giphy.com/media/a5OCMAro7MGQg/giphy.gif',
			'https://media.giphy.com/media/ACmZiQ0tNcTBu/giphy.gif',
			'https://media.giphy.com/media/RFz8kOxdrbAek/giphy.gif',
			'https://media1.tenor.com/images/c05477970eb9ec9dda8ad44868c8bc67/tenor.gif',
			'https://i.imgur.com/EdX7UIx.gif'
		];
		var randkill = list[Math.floor(Math.random() * list.length)];
  
  		const embed = new Discord.MessageEmbed()
			.setDescription(randkill2)
			.setColor('RANDOM')
			.setImage(randkill);
		await message.channel.send(embed);
	}
}