const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "dormir",
  aliases: ["sueño","cansado"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "tienes sueño o te vas a dormir",
    usage: "dormir",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** tiene ganas de dormir`,
      `**${message.author}** está cansad@ o tiene sueño`
		];
		var randdormir2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://i.imgur.com/wGFBB8R.gif',
			'https://i.imgur.com/8enkl85.gif',
			'https://i.imgur.com/Bst6GQy.gif',
			'https://i.imgur.com/pI5362f.gif',
			'https://i.imgur.com/21WkAEM.gif',
			'https://i.imgur.com/b2Ia46y.gif',
			'https://i.imgur.com/85nyVl9.gif',
			'https://i.imgur.com/vegpQtb.gif',
			'https://i.imgur.com/9jsf2o2.gif',
			'https://i.imgur.com/tsD6W5G.gif',
			'https://i.imgur.com/HQpZZVg.gif',
			'https://i.imgur.com/zAiICns.gif',
			'https://i.imgur.com/7EvY3I0.gif',
			'https://i.imgur.com/gSqV90U.gif'
		];
		var randdormir = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randdormir2)
			.setColor('RANDOM')
			.setImage(randdormir);
		await message.channel.send(embed);
	}
}