const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "dwarns",
  category: "<:cmdnc:750759170260598846> ▸ administracion ",
  usage: "dwarns <USER> ",
  description: "Elimina los avisos del usuario mencionado",
  run: async (client, message, args) => {
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No puedes usar ese comando!")
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send('<:usnc:750762153669034034> |Por favor, especifique un usuario, a través de la mención o ID');

        if(user.bot) return message.channel.send('<:9902_discord_dnd:748617396381548687> |No puedes advertir bots');

        if(user.id === message.author.id) return message.channel.send('No puedes borrar tus propias advertencias.');

        db.delete(`warnings_${message.guild.id}_${user.id}`);

        message.channel.send('Advertencias Reseteadas')
    }
}