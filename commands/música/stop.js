const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json")



const discord = require("discord.js");

module.exports = {
  name: "stop",
  category: "<:nmmcbot:754690424668684361> ▸ música ",
  description: "Stop the music and take rest ;)",
  run: async (client, message, args) => {
    
    
let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Reanudar la canción del curandero")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("No hay nada sonando que pueda detener")
      return message.channel.send(embed);
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
};