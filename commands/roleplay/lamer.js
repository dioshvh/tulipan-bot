const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "lamer",
    category: "<:rpbot:751008542265311282> ▸ roleplay ",
    description: "lame a un usuario",
    usage: "lamer <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<:usnc:750762153669034034> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("Pensé que pensabas , pero se ve que no");

		var list = [
			`**${message.author}** está lamiendo suavemente a **${user.username}** >u<`,
      `**${message.author}** le mete un lametazo **${user.username}** >u<`,
      `**${message.author}** lame cual caramelo a **${user.username}** >u<`
		];
	  var randlick2 = list[Math.floor(Math.random() * list.length)];

		var list = [
      'https://i.imgur.com/Ldnz44J.jpg',
      'https://i.imgur.com/R7828on.gif',
      'https://i.imgur.com/ntielRV.gif',
      'https://i.imgur.com/4JWP4DM.gif',
      'https://i.imgur.com/cuDgb24.gif',
      'https://i.imgur.com/Bb0Gfh3.gif',
      'https://i.imgur.com/gf1RHvk.gif',
      'https://i.imgur.com/7eyQEqv.gif',
      'https://i.imgur.com/xqaByBQ.gif',
      'https://i.imgur.com/R5f1OC4.gif'
		];
		var randlick = list[Math.floor(Math.random() * list.length)];

		const embed = new Discord.MessageEmbed()
			.setDescription(randlick2)
			.setColor('RANDOM')
			.setImage(randlick);
		await message.channel.send(embed);
	}
}