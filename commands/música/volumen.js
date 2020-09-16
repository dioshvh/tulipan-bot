const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../../config.json")
module.exports = {
  name: "volumen",
  category: "<:nmmcbot:754690424668684361> ▸ música ",
  description: "Manage the volume of the song",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You are not allowed to change the volume of the music")
    }
    

    
    let embed = new MessageEmbed().setColor(COLOR);

    
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
    
    if(!args[0]) {
      embed.setAuthor(`El volumen actual es ${serverQueue.volume}`)
      return message.channel.send(embed)
    }
    
    if(isNaN(args[0])) {
      embed.setAuthor("Por favor, utilice sólo valores numéricos")
      return message.channel.send(embed)
    }
    
    if(args[0] > 200) {
      embed.setAuthor("Morirás si llegas al límite de 200 :)")
      return message.channel.send(embed)
    }
    
    serverQueue.volume = args[0]
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100)
    embed.setDescription(`<:cmdnc:750759170260598846> |Volumen establecido en ${args[0]}`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
    
  }
};