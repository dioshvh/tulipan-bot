const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "aburrido",
  aliases: ["bored"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "demuestra que estas aburrido",
    usage: "aburrido",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** está aburrido`,
      `**${message.author}** está muy aburrido :c`
		];
		var randaburrido2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://i.imgur.com/ALCi6L7.gif',
			'https://i.imgur.com/UK9c5df.gif',
			'https://i.imgur.com/9sizzug.gif',
			'https://i.imgur.com/G7U6aOr.gif',
			'https://i.imgur.com/iyUN6dL.gif',
			'https://i.imgur.com/LuAKO84.gif',
			'https://i.imgur.com/zg3yGzw.gif',
			'https://i.imgur.com/PUFA6Xg.gif',
			'https://i.imgur.com/TZm87Pp.gif',
			'https://i.imgur.com/1mMvXcE.gif',
			'https://i.imgur.com/LQRbdQO.gif',
			'https://i.imgur.com/o1hCANv.gif'
		];
		var randaburrido = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randaburrido2)
			.setColor('RANDOM')
			.setImage(randaburrido);
		await message.channel.send(embed);
	}
}