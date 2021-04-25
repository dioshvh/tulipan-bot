const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "aplaudir",
  aliases: ["aplauso"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "aplaude",
    usage: "aplaudir",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** comenzó a aplaudir`,
      `**${message.author}** le dió por aplaudir`
		];
		var randaplaudir2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://i.imgur.com/3ZDHxG5.gif',
      'https://i.imgur.com/hww3khS.gif',
      'https://i.imgur.com/Vc4qDBu.gif',
      'https://i.imgur.com/MiXLLSn.gif',
      'https://i.imgur.com/gGks9vI.gif',
      'https://i.imgur.com/6COciWV.gif',
      'https://i.imgur.com/Fb5e4YT.gif',
      'https://i.imgur.com/rCmeEw0.gif',
      'https://i.imgur.com/WIRdYxE.gif',
      'https://i.imgur.com/5jD4oI0.gif',
      'https://i.imgur.com/XAGUX6G.gif',
      'https://i.imgur.com/nm0H0IG.gif',
      'https://i.imgur.com/gJYWOij.gif'
		];
		var randaplaudir = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randaplaudir2)
			.setColor('RANDOM')
			.setImage(randaplaudir);
		await message.channel.send(embed);
	}
}