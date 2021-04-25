const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const moment = require("moment")
const { COLOR } = require("../../config.json")
module.exports = {
  name: "servidor",
  aliases: ["sv", "serverinfo"],
    category: "<:dash_logo:832271934775361606> informativos ",
  description: "Obten información detallada del servidor",
  run: async (client, message, args) => {
        let roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        let emojis = message.guild.emojis.cache;
        let members = message.guild.members.cache;
        let channels = message.guild.channels.cache;
        let embed = new MessageEmbed()
        .setTitle(`Informacion de ${message.guild.name}`)
        .setThumbnail(message.guild.iconURL())
        .setColor(COLOR)
        .addField("Informacion", [
            `🏷️ · Nombre: ${message.guild.name}`,
            `🆔 · ID: ${message.guild.id}`,
            `🌷 · Logo : [click here](${message.guild.iconURL({dynamic: true})})`,
            `<:KingsCrown:832253491283230770>  · Owner : <@${message.guild.ownerID}>`,  
            '\u200b'
        ])
        .addField('Mas Informacion', [
            `<:users_logo:832263195590656021> · Miembros: ${message.guild.memberCount}`,
            `<:otachan_wholesome:832242133368700928> · Emojis: ${message.guild.emojis.cache.size}`,
            `⚙️ · Roles: ${roles.length}`,
            `<:dash_logo:832271934775361606> · Canales: ${message.guild.channels.cache.size}`,

            '\u200b'
        ])
        message.channel.send(embed)
    }
}