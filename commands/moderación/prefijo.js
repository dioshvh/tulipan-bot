const db = require("quick.db")
const { default_prefix } = require("../../config.json")

module.exports = {
  name: "prefijo",
  aliases: ["setprefix","prefix"],
  category: "<:dash_logo:832271934775361606> administracion ",
  usage: "prefijo <nuevo-prefijo>",
  description: "Cambia el prefijo del bot en tu servidor",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("No puedes usar ese comando!").then(msg => msg.delete({timeout: 5000}));
    }
    
    if(!args[0]) {
      return message.channel.send("<a:uncheck_raveninha:832234474883645460> |Por favor establezca el nuevo prefijo!").then(msg => msg.delete({timeout: 5000}));
    } 
    
    if(args[1]) {
      return message.channel.send("<a:uncheck_raveninha:832234474883645460> |No puedes ponerle prefijo a un argumento").then(msg => msg.delete({timeout: 5000}));
    }
    
    if(args[0].length > 3) {
      return message.channel.send("<a:uncheck_raveninha:832234474883645460> |No puedes poner un prefijo de mas de 3 caracteres").then(msg => msg.delete({timeout: 5000}));
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("<a:check_raveninha:832234420848820235> |Prefijo Reseteado")
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`<a:check_raveninha:832234420848820235> |El prefijo se a cambiado a ${args[0]}`)
    
  }
}