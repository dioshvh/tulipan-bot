const { Util, MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
    name: "skip",
  aliases: ["s","saltar"],
  category: "<:dash_logo:832271934775361606> musica ",
  usage: "skip",
  description: "skip",
  run: async (client, message, args) => {

    const channel = message.member.voice.channel
    if (!channel)return sendError("Lo siento, pero hay que estar en un canal de voz para saltar la canción.", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("No hay nada que pueda saltarse por ti.", message.channel);
        if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Canción Saltada!")
      .setColor("YELLOW")
      .setTitle("se skipeo la canción!")
       
   return message.channel.send(xd).catch(err => console.log(err));
      
    }


       try{
      serverQueue.connection.dispatcher.end()
      } catch (error) {
        serverQueue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: La canción se ha skipeado y la cola se ha despejado.: ${error}`, message.channel);
      }
    message.react("✅")
  },
};