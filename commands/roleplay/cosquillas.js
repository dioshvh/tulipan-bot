const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "cosquillas",
    category: "<:rpbot:751008542265311282> ▸ roleplay ",
    description: "Hazle cosquillas a un usuario",
    usage: "cosquillas <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<:usnc:750762153669034034> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("Será dificil que te hagas cosquillas a ti mismo o.o");

    var list = [
			`**${message.author}** le hace cosquillas a **${user.username}** uwu`,
      `**${message.author}** -le hace cosquillas- riete o no te dejaré! **${user.username}** >u<`,
      `**${message.author}** -le hace cosquillas- espero dejarte sin aliento **${user.username}** >u<`
		];
		var randtickle2 = list[Math.floor(Math.random() * list.length)];

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
		var randtickle = list[Math.floor(Math.random() * list.length)];

		const embed = new Discord.MessageEmbed()
			.setDescription(randtickle2)
			.setColor('RANDOM')
			.setImage(randtickle);
		await message.channel.send(embed);
	}
}