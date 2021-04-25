const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
const { COLOR } = require("../../config.json")
module.exports = {
name: "8ball",
category: "<:dash_logo:832271934775361606> divertidos ",
description: "Haz una pregunta para que te la responda",
usage: "8ball <PREGUNTA>",
run: async (client, message, args) => {
const Discord = require("discord.js");
const question = args.join(' ');
if (!question)
return message.channel.send(`¡No especificó su pregunta!`);
else {let responses = [
"En mi opinion, si",
"Es cierto",
"Es decididamente asi",
"Probablemente","Buen pronostico",
"Todo apunta a que si",
"Sin duda",
"Si",
"Si - definitivamente",
"Debes confiar en ello",
"Respuesta vaga, vuelve a intentarlo",
"Pregunta en otro momento",
"Sera mejor que no te lo diga ahora",
"No puedo predecirlo ahora",
"Concentrate y vuelve a preguntar",
"Puede ser",
"No cuentes con ello",
"Mi respuesta es no",
"Mis fuentes me dicen que no",
"Las perspectivas no son buenas",
"Muy dudoso"];let response = responses[Math.floor(Math.random() * responses.length)];
let Embed = new MessageEmbed()
.setTitle(`· <a:pink_space:832234783135891527> | 8ball ·`)
.setDescription(`**Tu Pregunta:** ${question}\n **Respuesta:** ${response}`)
.setColor(COLOR)
message.channel.send(Embed);
}
}
}