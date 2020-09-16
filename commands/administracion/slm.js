const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "slm",
  category: "<:cmdnc:750759170260598846> ▸ administracion ",
  usage: "slm <SEGUNDOS>",
  description: "Establece el modo lento en el canal",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No puedes usar ese comando!")
      if (!args[0])
      return message.channel.send(
        `<:cmdnc:750759170260598846> |No especificó el tiempo en segundos que desea establecer el modo lento de este canal!`
      );
    if (isNaN(args[0])) return message.channel.send(`<:cmdnc:750759170260598846> |Eso no es un número!`);
    let reason = message.content.slice(
      client.length + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == "<:cmdnc:750759170260598846> |No se ha establecido una razón";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.delete().catch(O_o => {});
    message.channel.send({ embed: { color: "RANDOM", description:
      `Se ha establecido el modo lento en este canal en **${args[0]}**s por la siguiente razón: **${reason}**`
    } });
  }
}