const Discord = require("discord.js");
module.exports = {
name: "poll",
aliases: ["encuesta"],
category: "<:dash_logo:832271934775361606> administracion ",
description: "haz una encuesta simple",
usage: "poll <pregunta>",
run: async (client, message, args) => {
if (!["463212151897587723", "830029216509853726"].includes(message.author.id)) return message.channel.send('Solo los VIPS puede usar este comando');
let mensaje = args.join(" ");
if(!mensaje) return message.channel.send("Especifica lo que quieres decir.")
const poll = new Discord.MessageEmbed()
.setTitle(`Encuesta creada por ${message.author.username}.`)
.setColor("RANDOM")
.setDescription(`${mensaje}`)
message.delete()
let msgEmbed = await message.channel.send(poll);
await msgEmbed.react('👍')
await msgEmbed.react('👎')
}
}