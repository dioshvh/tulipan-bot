const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "acariciar",
    category: "<:rpbot:751008542265311282> ▸ roleplay ",
    description: "Hazle caricias a un usuario",
    usage: "acariciar <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<:usnc:750762153669034034> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("Será dificil que te hagas caricias a ti mismo o.o");

		var list = [
      `**${message.author}** le da caricias a **${user.username}** >u<`,
      `**${message.author}** acaricia a **${user.username}** >u<`,
      `**${message.author}** acaricia con amor a **${user.username}** >u<`,
      `**${user.username}** recibe caricias con cariño de **${message.author}** >u<`
		];
		var randpat2 = list[Math.floor(Math.random() * list.length)];

		var list = [
      'https://i.imgur.com/fkMvFL1.gif',
      'https://i.imgur.com/QgXLbdq.gif',
      'https://i.imgur.com/48ErIBr.jpg',
      'https://i.imgur.com/C3Flsst.gif',
      'https://i.imgur.com/1g0RR3T.gif',
      'https://i.imgur.com/8xrgxsy.gif',
      'https://i.imgur.com/83KtJNM.gif',
      'https://i.imgur.com/WUxhiVL.gif',
      'https://i.imgur.com/xJXvxYd.gif',
      'https://i.imgur.com/5J0M2F7.gif',
      'https://i.imgur.com/NGdPm56.gif',
      'https://i.imgur.com/DnAkhJi.gif',
      'https://i.imgur.com/ROX2C71.gif'
		];
		var randpat = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randpat2)
			.setColor('RANDOM')
			.setImage(randpat);
		await message.channel.send(embed);
	}
}