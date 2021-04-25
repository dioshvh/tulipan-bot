const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "cosquillas",
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "hazle cosquillas a un usuario",
    usage: "cosquillas <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<a:uncheck_raveninha:832234474883645460> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("Pensé que pensabas , pero se ve que no");

		var list = [
			`**${message.author}** le hace cosquillas a **${user.username}** >u<`,
      `**${message.author}** le hace llorar de la risa a **${user.username}** >u<`,
      `**${message.author}** le hace muchas cosquillas a **${user.username}** >u<`
		];
	  var randtickle = list[Math.floor(Math.random() * list.length)];

    var list = [
			'https://i.imgur.com/OVvmN1c.gif',
			'https://i.imgur.com/13l97UH.gif',
			'https://i.imgur.com/5ApMJ8U.gif',
			'https://i.imgur.com/fB8zwvR.gif',
			'https://i.imgur.com/oEDRmPA.gif',
			'https://i.imgur.com/0FgA4nw.gif',
			'https://i.imgur.com/j0PeqRq.gif',
			'https://i.imgur.com/L5wsA7N.gif'
		];
		var randtickle2 = list[Math.floor(Math.random() * list.length)];

		const embed = new Discord.MessageEmbed()
			.setDescription(randtickle)
			.setColor('RANDOM')
			.setImage(randtickle2);
		await message.channel.send(embed);
	}
}