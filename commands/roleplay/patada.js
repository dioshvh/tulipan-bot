const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "patada",
    category: "<:rpbot:751008542265311282> ▸ roleplay ",
    description: "Patea a un usuario",
    usage: "patada <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<:usnc:750762153669034034> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("Será dificil que te patees a ti mismo o.o");

		var list = [
      `**${message.author}** le ha dado una patada fuerte a **${user.username}** >n<`,
      `**${message.author}** le da una patada a **${user.username}** >u<`,
      `**${message.author}** patea a **${user.username}** >u<`
		];
		var randpatada2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://i.imgur.com/SiC5Min.gif',
      'https://i.imgur.com/NDWFjTx.gif',
      'https://i.imgur.com/xvURrcc.gif',
      'https://i.imgur.com/l20ROdE.gif',
      'https://i.imgur.com/EA3W2ez.gif',
      'https://i.imgur.com/FFcckkB.gif',
      'https://i.imgur.com/lvEY1HA.gif',
      'https://i.imgur.com/CjAJXJR.gif',
      'https://i.imgur.com/BYEEAHZ.gif',
      'https://i.imgur.com/KMKKg8m.gif',
      'https://i.imgur.com/nJ4ZdqC.gif'
		];
		var randpatada = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randpatada2)
			.setColor('RANDOM')
			.setImage(randpatada);
		await message.channel.send(embed);
	}
}