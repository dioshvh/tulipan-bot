const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  category: "<:cmdnc:750759170260598846> ▸ administracion ",
  usage: "warn <USER> <RAZON>",
  description: "Avisa a alguien para que cumpla las normas",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("No puedes usar este comando!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("<:usnc:750762153669034034> |Por favor mencione un usuario > warn @USER <RAZON>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("No puedes warnear un bot")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Hmm... Date un respiro")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("Como vas a warnear al owner? -_-")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("<:cmdnc:750759170260598846> |Por favor porporcione una razón > warn @USER <RAZON>")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`<:9902_discord_dnd:748617396381548687> |${message.mentions.users.first().username} ya alcanzó su límite con 3 advertencias`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`Se le ha advertido en **${message.guild.name}** por ${reason}`)
      await message.channel.send(`Usted advirtió a **${message.mentions.users.first().username}** por ${reason}`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`Se le ha advertido en **${message.guild.name}** por ${reason}`)
      await message.channel.send(`Usted advirtió a **${message.mentions.users.first().username}** por ${reason}`)
    }
    
  
  } 
}