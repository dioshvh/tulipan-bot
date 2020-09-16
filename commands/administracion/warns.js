const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warns",
  category: "<:cmdnc:750759170260598846> ▸ administracion ",
  usage: "warns <USER> ",
  description: "Revisa los avisos del usuario mencionado",
  run: async (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No puedes usar ese comando!")
            const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;


        let warnings = await db.get(`warnings_${message.guild.id}_${user.id}`);

        if(warnings === null) warnings = 0;

        message.channel.send(`**${user.username}** Tiene *${warnings}* Advertencia(s)`);
    }
}