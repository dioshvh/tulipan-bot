const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "revivir",
  aliases: ["curar","sanar"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "revive a un usuario",
    usage: "revivir <usuario>",
    run: async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (!user) return message.channel.send("<a:uncheck_raveninha:832234474883645460> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("No te puedes revivir a ti mismo...\nA no ser que seas un Fenix");

		var list = [
			`**${message.author}** ha revivido / curado a **${user.username}** :0`,
      `**${message.author}** revivió a **${user.username}** :0`,
      `**${message.author}** sanó a **${user.username}** :0`
		];
	  var randrevivir2 = list[Math.floor(Math.random() * list.length)];

		var list = [
      'https://i.imgur.com/km3BgXY.gif',
      'https://i.imgur.com/RYIz9lu.gif',
      'https://i.imgur.com/gOOM3UX.gif',
      'https://i.imgur.com/eMfMnNi.gif',
      'https://i.imgur.com/i87g7eI.gif',
      'https://i.imgur.com/OG1XBNY.gif'
		];
		var randrevivir = list[Math.floor(Math.random() * list.length)];
  
  		const embed = new Discord.MessageEmbed()
			.setDescription(randrevivir2)
			.setColor('RANDOM')
			.setImage(randrevivir);
		await message.channel.send(embed);
	}
}