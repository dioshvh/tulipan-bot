const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "abrazo",
    category: "<:rpbot:751008542265311282> ▸ roleplay ",
    description: "Abraza a un usuario",
    usage: "abrazo <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<:usnc:750762153669034034> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send(`**${message.author}** se ha dado un abrazo a mismo o.o`);

		var list = [
      `**${message.author}** le ha dado un abrazo a **${user.username}** >n<`,
      `**${message.author}** abraza a **${user.username}** >u<`,
      `**${message.author}** le da un abrazito a **${user.username}** >u<`
		];
		var randcuddle2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://i.imgur.com/UoEV0A4.gif',
      'https://i.imgur.com/7Z3KRx8.gif',
      'https://i.imgur.com/ZVilgfK.gif',
      'https://i.imgur.com/rPmiMfI.gif',
      'https://i.imgur.com/fwFRRjS.gif',
      'https://i.imgur.com/zkIyxlA.gif',
      'https://i.imgur.com/d8sw3jF.gif',
      'https://i.imgur.com/sPBaRof.gif',
      'https://i.imgur.com/vsyV1GP.gif',
      'https://i.imgur.com/jHLxRcZ.gif',
      'https://i.imgur.com/2Gg1FOx.gif'
		];
		var randcuddle = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randcuddle2)
			.setColor('RANDOM')
			.setImage(randcuddle);
		await message.channel.send(embed);
	}
}