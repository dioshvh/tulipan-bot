const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "logro",
    aliases: ["logromc","achievement"],
    category: "<:dash_logo:832271934775361606> divertidos ",
    description: "Logro de Minecraft",
    usage: "logro <texto> ",
    run: async (client, message, args) => {
    function Logros() {
		var rand = [
		'1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'
		];
		return rand[Math.floor(Math.random() * rand.length)];
		}
    const logro = args.join('%20');
    if(!logro) return message.channel.send('<a:attention:763369859475832843> |Introduzca el texto ▸ ``Ejemplo logro "texo"``').then(msg => msg.delete({timeout: 5000}));
    const logroembed = new Discord.MessageEmbed()
	  .setTitle('Minecraft · Generador de Logros')
	  .setImage(`https://minecraftskinstealer.com/achievement/${Logros()}/Achievement%20Get!/${logro}`);
    message.channel.send(logroembed);
  }
}