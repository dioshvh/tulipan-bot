const Discord = require("discord.js");
module.exports = {
    name: "logro",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Manda un logro personalizado",
    usage: ".logro <texto>+<texto2>",
    run: async (client, message, args) => {
    function Logros() {
		var rand = [
		'1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'
		];
		return rand[Math.floor(Math.random() * rand.length)];
		}
    const logro = args.join(" ");
    if(!logro) return message.channel.send('<:9902_discord_dnd:748617396381548687> |Introduzca el texto ▸ ``Ejemplo .logro "texto1+texto2"``')
    const logroembed = new Discord.MessageEmbed()
	  .setTitle('<a:8134_jumping_dirt:732957839504703508> ▸ Minecraft | Generador de Logros')
	  .setImage(`https://minecraftskinstealer.com/achievement/${Logros()}/Achievement%20Get!/${logro}`);
    message.channel.send(logroembed);
  }
}