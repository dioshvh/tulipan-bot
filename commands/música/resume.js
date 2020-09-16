const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../../config.json")


module.exports = {
  name: "resume", 
  category: "<:nmmcbot:754690424668684361> ▸ música ",
  description: "Reanudar la canción",
  run: async (client, message, args) => {
    let embed = new MessageEmbed()
.setColor(COLOR);

      const { channel } = message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("NECESITAS ESTAR EN EL CANAL DE VOZ :/")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
  embed.setAuthor("✅ | Canción reanudada")
   embed.setThumbnail(client.user.displayAvatarURL())
  return message.channel.send(embed)
 }
    embed.setDescription("No hay nada en pausa que se pueda reanudar")
    message.channel.send(embed)
    
  }
}