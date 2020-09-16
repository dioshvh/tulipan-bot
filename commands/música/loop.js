const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json")

module.exports = {
  name: "loop",
  category: "<:nmmcbot:754690424668684361> ▸ música ",
  description: "Haz un bucle en tu cola y diviértete",
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
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop
    
    
    embed.setDescription(`Loop is now **${serverQueue.loop ? "Enabled" : "Disabled"}**`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
    
    
    
    
  }
}