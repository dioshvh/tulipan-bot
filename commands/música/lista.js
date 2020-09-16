const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../../config.json")

module.exports = {
  name: "lista",
  category: "<:nmmcbot:754690424668684361> ▸ música ",
  description: "Recive la lista de Reproducción",
  run: async (client, message, args) => {
    let embed = new MessageEmbed().setColor(COLOR);
    const { channel } = message.member.voice;

    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("NECESITAS ESTAR EN EL CANAL DE VOZ :/");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("No hay nada en la lista");
      return message.channel.send(embed);
    }

    embed.setDescription(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
    embed.setThumbnail(client.user.displayAvatarURL())
    
    message.channel.send(embed);
  }
};