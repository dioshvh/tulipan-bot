const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "kick",
  category: "<:cmdnc:750759170260598846> ▸ administracion ",
  usage: "kick <USER> <RAZON>",
  description: "Expulsa a alguien que haya incumplido las normas",
  run: async (client, message, args) => {
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No puedes usar ese comando!")
    let user = message.mentions.users.first();
    
    let member = message.guild.member(user);
    let reason = args.slice(1).join(" ");
    
    if (!user) return message.channel.send("<:usnc:750762153669034034> |Por favor mencione un usuario.");
    if (user.id === message.author.id) return message.channel.send("No puedes kickearte a ti mismo.");
    if (user.id === client.user.id) return message.channel.send("No puedes kickearme.");
    
    if (!reason) reason = "<:cmdnc:750759170260598846> |Por favor porporcione una razón";
    
    member.kick(reason).then(() => {
      message.channel.send(`Se ha kickeado a **${user.tag}**`);
    }).catch(err => {
      message.reply("No pude kickear al miembro.");
    })
  }  }