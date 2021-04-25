const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
    name: "stop",
  aliases: ["parar"],
  category: "<:dash_logo:832271934775361606> musica ",
  usage: "stop",
  description: "stop ",
  run: async (client, message, args) => {

    const channel = message.member.voice.channel
    if (!channel)return sendError("Lo siento, pero hay que estar en un canal de voz para parar música!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("No hay nada que pueda parar por ti.", message.channel);
   if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     try{
      serverQueue.connection.dispatcher.end();
      } catch (error) {
        message.guild.me.voice.channel.leave();
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: La reproduccion se ha detenido y la cola se ha reseteado.: ${error}`, message.channel);
      }
    message.client.queue.delete(message.guild.id);
    serverQueue.songs = [];
    message.react("✅")
  },
};