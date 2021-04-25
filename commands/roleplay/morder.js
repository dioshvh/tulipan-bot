const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "morder",
      category: "<:dash_logo:832271934775361606> roleplay ",
    description: "Muerde a un usuario",
    usage: "morder <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<a:uncheck_raveninha:832234474883645460> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("Será dificil que te patees a ti mismo o.o");

		var list = [
      `**${message.author}** le ha dado un mordisco fuerte a **${user.username}** >n<`,
      `**${message.author}** le da un mordisco a **${user.username}** >u<`,
      `**${message.author}** muerde a **${user.username}** >u<`
		];
		var randmorder2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://i.imgur.com/UA2rJkl.gif',
			'https://i.imgur.com/xW7Uq2F.gif',
			'https://i.imgur.com/Dmolykx.gif',
			'https://i.imgur.com/QcisEgn.gif',
			'https://i.imgur.com/by6VEJx.gif',
			'https://i.imgur.com/moSe7Ub.gif',
			'https://i.imgur.com/3XqV39j.gif',
			'https://i.imgur.com/ICmqD0H.gif',
			'https://i.imgur.com/6XIHkk1.gif',
			'https://i.imgur.com/LD7ipIb.gif',
			'https://i.imgur.com/ukOxP08.gif'
		];
		var randmorder = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randmorder2)
			.setColor('RANDOM')
			.setImage(randmorder);
		await message.channel.send(embed);
	}
}