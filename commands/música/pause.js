const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../../config.json")

module.exports = {
  name: "pause",
  category: "<:nmmcbot:754690424668684361> ▸ música ",
  description: "Detenga la canción",
  run: async (client, message, args) => {
  const { channel } = message.member.voice;
   let embed = new MessageEmbed()
.setColor(COLOR);

    
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("NECESITAS ESTAR EN EL CANAL DE VOZ :/")
      return message.channel.send(embed);
    }
    
    
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("No hay nada en reproduccion que pueda detener")
      return message.channel.send(embed);
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      embed.setDescription("✅ | Pausó la canción actual")
      embed.setThumbnail(client.user.displayAvatarURL())
      return message.channel.send(embed)
  }  
  }
}