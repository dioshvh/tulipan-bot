const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "feliz",
  aliases: ["happy"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "indica que estas feliz con este comando",
    usage: "feliz",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** está feliz UwU`,
      `**${message.author}** está muy feliz OwO`,
      `**${message.author}** está contento`
		];
		var randfeliz2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://media.giphy.com/media/kva48rssfNwti/giphy.gif',
			'https://media.giphy.com/media/1W85Rmz38KjlK/giphy.gif',
			'https://media.giphy.com/media/xDbS5VgmigHgk/giphy.gif',
			'https://media.giphy.com/media/KSgXDkMrKU3WE/giphy.gif',
			'https://media.giphy.com/media/MdLFOyVZtoUPm/giphy.gif',
			'https://media.giphy.com/media/TdLE1yoz3CfxC/giphy.gif',
			'https://media.giphy.com/media/d0JPBhiwCm6Kk/giphy.gif',
			'https://media.giphy.com/media/f4V2mqvv0wT9m/giphy.gif'
		];
		var randfeliz = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randfeliz2)
			.setColor('RANDOM')
			.setImage(randfeliz);
		await message.channel.send(embed);
	}
}