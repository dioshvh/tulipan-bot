const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "confesion",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Confiesa algo de manera anonima",
    usage: "confesion <text>",
    run: async (client, message, args) => {
    message.delete().catch(O_o => {});
		let text = args.slice(0).join(' ');
		if (!text) return 
		const embed = new Discord.MessageEmbed()
    .setTitle("<:logonc:750704904972140598> | Nueva Confesión:")
    .setDescription(`▸ ${text}`)
    .setFooter("Por: Anónimo")
    .setColor('#a14ea0')
		let confession = await message.channel.send(embed);
  }
}