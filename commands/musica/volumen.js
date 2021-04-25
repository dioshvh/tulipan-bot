const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
    name: "volumen",
  aliases: ["vol","v"],
  category: "<:dash_logo:832271934775361606> musica ",
  usage: "volumen <1-100>",
  description: "cambia el volumen",
  run: async (client, message, args) => {

    const channel = message.member.voice.channel;
    if (!channel)return sendError("Lo siento, pero hay que estar en un canal de voz para poner música!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("No hay nada que reproducir en este servidor.", message.channel);
    if (!serverQueue.connection) return sendError("No hay nada que reproducir en este servidor.", message.channel);
    if (!args[0])return message.channel.send(`El volumen actual es: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send(':notes: Solo números!').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return sendError('Por favor\'No ajuste el volumen a más de 150. ni a menos de 0',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new MessageEmbed()
    .setDescription(`Volumen Establecido en: **${args[0]/1}/100**`)
    .setAuthor("Gestión del volumen del servidor", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
    .setColor("BLUE")
    return message.channel.send(xd);
  },
};