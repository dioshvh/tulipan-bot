const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "esos5",
  aliases: ["chocala"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    usage: "esos5 <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<a:uncheck_raveninha:832234474883645460> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send(`${message.author} se choca la mano el mismo`);

		var list = [
			`**${message.author}** choca esos 5 con **${user.username}**`,
      `**${message.author}** y **${user.username}** chocan las manos`,
      `**${message.author}** y **${user.username}** chocan esos 5`
		];
	  var randchocala2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://i.imgur.com/8a93R2J.gif',
			'https://i.imgur.com/99Hu8ze.gif',
			'https://i.imgur.com/30AEOZS.gif',
			'https://i.imgur.com/jWdQo6g.gif',
			'https://i.imgur.com/6g5idRG.gif',
			'https://i.imgur.com/tmazdhO.gif',
			'https://i.imgur.com/Qh7FN3E.gif',
			'https://i.imgur.com/WnXvkud.gif'
		];
		var randchocala = list[Math.floor(Math.random() * list.length)];
  
  		const embed = new Discord.MessageEmbed()
			.setDescription(randchocala2)
			.setColor('RANDOM')
			.setImage(randchocala);
		await message.channel.send(embed);
	}
}