const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "8ball",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Responde a tu pregunta",
    usage: "8ball <pregunta>",
    run: async (client, message, args) => {
    const question = args.join(' ');
    if (!question)
    return message.channel.send(`¡No especificó su pregunta!`);
    else {
      let responses = [
        "Si",
        "No",
        "Definitivamente",
        "Quizás",
        "Tal vez",
        "Absolutamente si",
        "Puede ser",
        "Nunca lo sabremos",
        "Algo me dice que si",
        "Algo me dice que no",
        "No te sabria responder en estos momentos",
        "Absolutamente no",
        "No, ni en un millon de años"
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length)];
      let Embed = new MessageEmbed()
        .setTitle(`˗ˏˋ <:8bcmd:751013144142282822> | 8ball ˎˊ˗`)
        .setDescription(`**Tu Pregunta:** ${question}\n **Respuesta:** ${response}`)
        .setColor('#a14ea0')
      message.channel.send(Embed);
    }
    }
}