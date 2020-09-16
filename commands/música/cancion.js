const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../../config.json")

module.exports = {
  name: "cancion",
  category: "<:nmmcbot:754690424668684361> ▸ música ",
  description: "Consigue el nombre de la canción que se está reproduciendo actualmente",
  run: async (client, message, args) => {
    let embed = new MessageEmbed()
.setColor(COLOR)
      
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("NECESITAS ESTAR EN EL CANAL DE VOZ :/")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("El Bot no está reproduciendo nada")
      return message.channel.send(embed);
    }
    
    embed.setDescription(`**REPRODUCIENDO** - ${serverQueue.songs[0].title}`)
    .setThumbnail(serverQueue.songs[0].thumbnail)
    message.channel.send(embed)

    
    
    
  }
}