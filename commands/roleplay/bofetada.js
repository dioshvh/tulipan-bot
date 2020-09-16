const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "bofetada",
    category: "<:rpbot:751008542265311282> ▸ roleplay ",
    description: "Abofetea a un usuario",
    usage: "bofetada <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<:usnc:750762153669034034> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send(`**${message.author}** se ha dado una bofetada a mismo o.o`);

		var list = [
      `**${message.author}** le ha dado una bofetada a **${user.username}** >n<`,
      `**${message.author}** Abofetea a **${user.username}** >u<`,
      `**${message.author}** le da un tortón a **${user.username}** >u<`
		];
		var randbofetada2 = list[Math.floor(Math.random() * list.length)];

var list = [
			'https://i.imgur.com/T37cqid.gif',
			'https://i.imgur.com/OurfXpW.gif',
			'https://i.imgur.com/C3KmRIj.gif',
			'https://i.imgur.com/vuAL45R.gif',
			'https://i.imgur.com/S3f3MKj.gif',
			'https://i.imgur.com/0E5twa4.gif',
			'https://i.imgur.com/OhKCtYt.gif',
			'https://i.imgur.com/pZVgHCZ.gif',
			'https://i.imgur.com/NqQjn6I.gif',
			'https://i.imgur.com/NVnFxWe.gif',
			'https://i.imgur.com/v6Kua3D.gif',
			'https://i.imgur.com/v4cacyz.gif',
			'https://i.imgur.com/wDdE4Ku.gif',
			'https://i.imgur.com/3Gsxogx.gif',
			'https://i.imgur.com/2l6otRe.gif'
		];
		var randbofetada = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randbofetada2)
			.setColor('RANDOM')
			.setImage(randbofetada);
		await message.channel.send(embed);
	}
}