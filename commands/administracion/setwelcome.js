const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "<:cmdnc:750759170260598846> ▸ administracion ",
  usage: "setwelcome <#canal>",
  description: "Establece el canal de Bienvenidas",
  run: (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No puedes usar ese comando!")
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Por favor mencione un canal")
    }
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`El canal de Bienvenidas se ha establecido en ${channel}`)
  }
}