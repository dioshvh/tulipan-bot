const Discord = require("discord.js");
module.exports = {
    name: "geometry",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Manda un Texto con estilo de Geometry Dash",
    usage: ".geometry <texto>_<texto2>",
    run: async (client, message, args) => {
    const geometry = args.join(" ");
    if(!geometry) return message.channel.send('<:9902_discord_dnd:748617396381548687> |Introduzca el texto ▸ ``Ejemplo .logro "texto1_texto2"``')
    const gdembed = new Discord.MessageEmbed()
	  .setTitle('<:gd:752486735107194930> ▸ Geometry Dash | Generador de Texto')
	  .setImage(`https://gdcolon.com/tools/gdlogo/img/${geometry}`);
    message.channel.send(gdembed);
  }
}