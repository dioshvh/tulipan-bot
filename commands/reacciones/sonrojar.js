const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "sonrojar",
  aliases: ["blush","sonrojada","sonrojado"],
  category: "<:dash_logo:832271934775361606> reacciones ",
    description: "reaccion de sonrojar",
    usage: "sonrojar",
    run: async (client, message, args) => {

		var list = [
      `**${message.author}** se ha sonrojado mucho! Cute~`,
      `**${message.author}** tiene la apariencia de un tomate :tomato:`,
      `**${message.author}** se puso muy colorado >///<`
		];
		var randsonrojar2 = list[Math.floor(Math.random() * list.length)];

		var list = [
			'https://media.discordapp.net/attachments/399448944889036801/597194302342430732/fd227b616e48f724ed173ac46177e6e2.gif',
			'https://images-ext-2.discordapp.net/external/6Dop3d_Iq_qxemRdRQwQjBmODVCdRguLor8H-cKBx_o/https/imgur.com/cboxyrt.gif',
			'https://images-ext-1.discordapp.net/external/-eOSQAW08E7FjaiHoc2jBCA_uazBEy3fe8VfJjckdRA/https/imgur.com/lB0Hxia.gif',
			'https://images-ext-2.discordapp.net/external/gwY3GjEpL4lPdJ9p7xZ3ay90LFpQTqUq7JZjJ5n0JMA/https/imgur.com/atI1F5Z.gif',
			'https://media.discordapp.net/attachments/399448944889036801/762351080415035432/2262f08d-98ac-4202-aaf9-01093d3c6a5c.gif',
			'https://media.discordapp.net/attachments/399448944889036801/803565255560921098/8a3016af26fb1f4c26f32ec71590792d.gif',
			'https://media.discordapp.net/attachments/399448944889036801/753720537477415093/0a9235e7-b6ab-4520-8f59-d12106cd49b6.gif',
			'https://images-ext-1.discordapp.net/external/U5vFrM7U0HmmF2BWbZfLvhmbkMMn1x2dRvhNsryhrIg/https/imgur.com/W4Khg1M.gif',
      'https://media.discordapp.net/attachments/399448944889036801/673023019807146014/1c76d960-f390-4199-a387-efa7a240b127.gif',
      'https://media.discordapp.net/attachments/399448944889036801/755591612335259878/desconocido.gif'
		];
		var randsonrojar = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
			.setDescription(randsonrojar2)
			.setColor('RANDOM')
			.setImage(randsonrojar);
		await message.channel.send(embed);
	}
}