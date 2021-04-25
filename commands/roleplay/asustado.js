const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "asustado",
  aliases: ["susto","scared"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "demuestra que estas asustado",
    usage: "asustado",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** está asustad@`,
      `**${message.author}** tiene miedo o está asustad@`
		];
		var randasustado2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://media.giphy.com/media/3o7bugi24hokjYq0Le/giphy.gif',
			'https://media.giphy.com/media/HrHfL0qLWLqQU/giphy.gif',
			'https://media.giphy.com/media/ihG0ruiUdzVxAIaeQx/giphy.gif',
			'https://media.giphy.com/media/HRffOepPw0GXK/giphy.gif',
			'https://media.giphy.com/media/cxRGi2nJb3cBy/giphy.gif',
			'https://media.giphy.com/media/TEqzDIP8FDbnG/giphy.gif',
			'https://media.giphy.com/media/13lRBLnBpXXsS4/giphy.gif',
			'https://media.giphy.com/media/atyNuQv4pUOxG/giphy.gif',
			'https://media.giphy.com/media/XNu6RQ509uuM8/giphy.gif'
		];
		var randasustado = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randasustado2)
			.setColor('RANDOM')
			.setImage(randasustado);
		await message.channel.send(embed);
	}
}