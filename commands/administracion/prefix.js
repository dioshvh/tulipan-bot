const db = require("quick.db")
const { default_prefix } = require("../../config.json")

module.exports = {
  name: "prefix",
  category: "<:cmdnc:750759170260598846> ▸ administracion ",
  usage: "prefix <nuevo-prefix>",
  description: "Cambia el prefijo del bot en tu servidor",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("No puedes usar ese comando!")
    }
    
    if(!args[0]) {
      return message.channel.send("<:cmdnc:750759170260598846> |Por favor establezca el nuevo prefijo!")
    } 
    
    if(args[1]) {
      return message.channel.send("No puedes ponerle prefijo a un argumento")
    }
    
    if(args[0].length > 3) {
      return message.channel.send("No puedes poner un prefijo de mas de 3 caracteres")
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("✅ |Prefijo Reseteado")
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`✅ |El prefijo se a cambiado a ${args[0]}`)
    
  }
}