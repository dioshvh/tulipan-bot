const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "molestar",
    category: "<:rpbot:751008542265311282> ▸ roleplay ",
    description: "Molesta a un usuario",
    usage: "molestar <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<:usnc:750762153669034034> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("Pensé que pensabas , pero se ve que no");

		var list = [
			`**${message.author}** fastidia a **${user.username}** e.e`,
      `**${message.author}** molesta a **${user.username}** e.e`,
      `**${message.author}** incordia a **${user.username}** e.e`
		];
		var randpoke2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://i.imgur.com/DBieM3t.gif',
			'https://i.imgur.com/wac14tF.gif',
			'https://i.imgur.com/f3ZDG8o.gif',
			'https://i.imgur.com/0MrcGPT.gif',
			'https://i.imgur.com/k8MAe9Y.gif',
			'https://i.imgur.com/XTzqKpn.gif',
			'https://i.imgur.com/c1Vj0ca.gif',
			'https://i.imgur.com/26A0US8.gif',
			'https://i.imgur.com/fYY2v9L.gif',
			'https://i.imgur.com/F6qHah1.gif'
		];
		var randpoke = list[Math.floor(Math.random() * list.length)];
    
		const embed = new Discord.MessageEmbed()
			.setDescription(randpoke2)
			.setColor('RANDOM')
			.setImage(randpoke);
		await message.channel.send(embed);
	}
}