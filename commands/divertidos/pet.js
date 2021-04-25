const pet = require("pet-pet-gif") 
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
    name: "pet",
    aliases: ["petpet"],
    category: "<:dash_logo:832271934775361606> divertidos ",
    description: "Manda un gif de tu avatar",
    usage: "pet <USUARIO>",
    run: async (client, message, args) => {
 let user;
      if (message.mentions.users.first()) {
      user = message.mentions.users.first();
      } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]).user;
      } else {
      user = message.author;} 
if (!user) return message.channel.send("<a:uncheck_raveninha:832234474883645460> |Por favor mencione un usuario.");

  let animatedGif = await pet(user.displayAvatarURL({format: "png"}))
/*Aquí comenzamos, creamos una variable y usaremos el await para usar el modulo, dentro usaremos nuestro usuario y en el formato "png" 
*/
   
//ahora creamos un message attachment y lo enviamos como gif
    const petpet = new Discord.MessageAttachment(animatedGif, "petpet.gif") 
    
    message.channel.send(petpet) 
  }
}