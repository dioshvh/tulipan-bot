const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../../config.json")
module.exports = {
  name: "drop",
  category: "<:nmmcbot:754690424668684361> ▸ música ",
  description: "Deje la canción de la cola",
   run: async (client, message, args) => {
    let embed = new MessageEmbed().setColor(COLOR);
    const { channel } = message.member.voice;
    if (!channel) {
      embed.setAuthor("NO ESTÁS EN EL CANAL DE VOZ");
      return message.channe.send(embed);
    }

    const serverQueue = client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("La cola está vacía");
      return message.channel.send(embed);
    }
    
     if(isNaN(args[0])) {
      embed.setAuthor("Por favor, utilice sólo valores numéricos")
      return message.channel.send(embed)
    }
   
    if(args[0] > serverQueue.songs.length) {
      embed.setAuthor("Incapaz de encontrar esta canción")
      return message.channel.send(embed)
    }
    
    
    serverQueue.songs.splice(args[0] - 1, 1)
    embed.setDescription("DEJÓ LA CANCIÓN DE LA COLA")
    embed.setThumbnail(client.user.displayAvatarURL())
    return message.channel.send(embed)
  }
};