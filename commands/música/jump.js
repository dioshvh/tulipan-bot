const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json")

module.exports = {
  name: "jump",
  category: "<:nmmcbot:754690424668684361> ▸ música ",
  description: "Salta a cualquier canción que te guste",
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

    if (!serverQueue) {
      embed.setAuthor("No hay nada en reproduccion de lo que pueda hacer un bucle")
      return message.channel.send(embed);
    }
     if(!args[0]) {
      embed.setAuthor(`Por favor, dé el número de la canción`)
      return message.channel.send(embed)
    }
    
      if(isNaN(args[0])) {
      embed.setAuthor("Por favor, utilice sólo valores numéricos")
      return message.channel.send(embed)
    }
    
  if(serverQueue.songs.length < args[0]) {
    embed.setAuthor("Incapaz de encontrar esta canción en la cola")
    return message.channel.send(embed)  
                                         }
    serverQueue.songs.splice(0, Math.floor(args[0] - 1))
    serverQueue.connection.dispatcher.end()
    
    embed.setDescription(`SALTÓ AL NÚMERO DE LA CANCIÓN - ${args[0]}`)
    message.channel.send(embed)
    
  }
}