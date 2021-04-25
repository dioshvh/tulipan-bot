const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "besar",
    aliases: ["kiss","beso"],
   category: "<:dash_logo:832271934775361606> roleplay ",
    description: "besa a un usuario",
    usage: "besar <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<a:uncheck_raveninha:832234474883645460> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("Pensé que pensabas , pero se ve que no");

		var list = [
			`**${message.author}** le da un besito a **${user.username}** nwn`,
      `**${message.author}** y **${user.username}** se besan apasionadamente`,
      `**${message.author}** y **${user.username}** se dan un besito uwu`
		];
		var randbeso = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif',
			'https://media.tenor.com/images/b020758888323338c874c549cbca5681/tenor.gif',
			'https://media.tenor.com/images/68d59bb29d7d8f7895ce385869989852/tenor.gif',
			'https://media.tenor.com/images/25359520a0973f896b002689ed90db8d/tenor.gif',
			'https://media1.tenor.com/images/f34f73decaef049f9354b27984dfb09c/tenor.gif',
			'https://media1.tenor.com/images/df692538bbf513f7bd94709435e96342/tenor.gif',
			'https://media1.tenor.com/images/34ecc943dd11f0c55689e25f1bacddfb/tenor.gif',
			'https://media1.tenor.com/images/d93c9a9c201ec1fe3c8011718b18a83c/tenor.gif',
			'https://media1.tenor.com/images/f03f245e14fdfcacaf06318cdc667a03/tenor.gif',
			'https://media1.tenor.com/images/5cf6c2fef93911111538d837ec71c24c/tenor.gif'
		];
		var randpoke = list[Math.floor(Math.random() * list.length)];
    
		const embed = new Discord.MessageEmbed()
			.setDescription(randbeso)
			.setColor('RANDOM')
			.setImage(randpoke);
		await message.channel.send(embed);
	}
}