const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "reir",
  aliases: ["risa"],
  category: "<:dash_logo:832271934775361606> roleplay ",
    description: "te vas a reir",
    usage: "reir",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** tiene ganas de reir`,
      `**${message.author}** se parte de la risa`
		];
		var randreir2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://i.imgur.com/ZgPh5WI.gif',
      'https://i.imgur.com/d6k1b6q.gif',
      'https://i.imgur.com/Sre8UR3.gif',
      'https://i.imgur.com/80QhiRZ.gif',
      'https://i.imgur.com/VaTBCGk.gif',
      'https://i.imgur.com/x76ZKhE.gif',
      'https://i.imgur.com/tMtGgsO.gif',
      'https://i.imgur.com/SMk7iLk.gif',
      'https://i.imgur.com/2rgeam2.gif',
      'https://i.imgur.com/65bx5DY.gif',
      'https://i.imgur.com/mpyiM7b.gif'
		];
		var randreir = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randreir2)
			.setColor('RANDOM')
			.setImage(randreir);
		await message.channel.send(embed);
	}
}