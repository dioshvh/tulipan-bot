const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../../config.json")


module.exports = {
  name: "skip",
  category: "<:nmmcbot:754690424668684361> ▸ música ",
  description: "Sáltate la canción o pasa a la siguiente.",
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
const vote = message.client.vote.get(message.guild.id)
    if (!serverQueue) {
      embed.setAuthor("No hay nada en reproduccion que puedas skipear")
      return message.channel.send(embed);
    }
    
    const vcvote = Math.floor(message.guild.me.voice.channel.members.size / 2)
    const okie = Math.floor(message.guild.me.voice.channel.members.size / 2 - 1)
    console.log(message.guild.me.voice.channel.members.size)
     if(!message.member.hasPermission("ADMINISTRATOR")) {
       if(vote.vote > okie) {
         serverQueue.connection.dispatcher.end();
    embed.setDescription("VOTO - SALTAR | Saltar la canción")
    embed.setThumbnail(client.user.displayAvatarURL())
    return message.channel.send(embed);
       }
       
       if(vote.voters.includes(message.author.id)) {
         return message.channel.send("Ya has skipeado por esta canción")
       }
       
       if(vcvote === 2) {
          serverQueue.connection.dispatcher.end();
    embed.setDescription("✔ | Skip canción")
    embed.setThumbnail(client.user.displayAvatarURL())
    return message.channel.send(embed);
       }
       
       
       
vote.vote++
       vote.voters.push(message.author.id)
       return message.channel.send(`Votaste para skipear la canción , pero actualmente necesitamos ${Math.floor(vcvote - vote.vote)} skip`)
    
     
     
     
     }

    serverQueue.connection.dispatcher.end();
    embed.setDescription("✔ | Skip canción")
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed);
  }
};