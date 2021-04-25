const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "espray",
    category: "<:dash_logo:832271934775361606> roleplay ",
    description: "Rocía con espray a un usuario",
    usage: "espray <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<a:uncheck_raveninha:832234474883645460> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("Pensé que pensabas , pero se ve que no");

		var list = [
			`**${message.author}** -Le rocia spray a **${user.username}**- 💦`,
      `**${message.author}** -Le rocia la cara a **${user.username}**- 💦`,
      `**${message.author}** -Le llena de spray a **${user.username}**- 💦`
		];
	  var randspray2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://i.imgur.com/NjzNYVZ.gif',
			'https://i.imgur.com/r183sVa.gif',
			'https://i.imgur.com/nPxxlrA.gif',
			'https://i.imgur.com/FthgCzF.gif',
			'https://i.imgur.com/ctmlL8k.gif',
			'https://i.imgur.com/8mNhylD.gif',
			'https://i.imgur.com/Dvzqt39.gif',
			'https://i.imgur.com/1PB29c3.gif',
			'https://i.imgur.com/iM2kZ6F.gif',
			'https://i.imgur.com/D9iwgJJ.gif'
		];
	  var randspray = list[Math.floor(Math.random() * list.length)];

		const embed = new Discord.MessageEmbed()
			.setDescription(randspray2)
			.setColor('RANDOM')
			.setImage(randspray);
		await message.channel.send(embed);
	}
}