const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description:
    "Obten el enlace de invitación del bot",
  usage: ".invite",
  category: "<:logonc:750704904972140598> ▸ informativos ",
  run: async (client, message, args) => {
  		const embed = new MessageEmbed()
			.setTitle(
				'<a:6181_check:732704035655778365> Dale Click aquí para Invitarme'
			)
			.setDescription('<:logonc:750704904972140598> |Enlace de invitación')
			.setURL(
				'https://discord.com/oauth2/authorize?client_id=750671590521569280&scope=bot&permissions=8'
			)
			.setColor('GREEN')
			.setAuthor('by zDrar ♡ ', 'https://i.imgur.com/ToUQx0m.jpg');
		message.channel.send(embed);
  }
}