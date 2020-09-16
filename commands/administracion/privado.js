const Discord = require("discord.js");
module.exports = {
    name: "privado",
    category: "<:cmdnc:750759170260598846> ▸ administracion ",
    description: "Manda un mensaje a una persona por privado a traves del bot",
    usage: "privado <usuario> <mensaje>",
    run: async (client, message, args) => {
      message.delete().catch(O_o => {});       
      let dUser = message.guild.member(message.mentions.users.first())
      if (!dUser) return message.channel.send("<:usnc:750762153669034034> |Por favor mencione un usuario.")
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No puedes usar ese comando!")
      let dMessage = args.join(" ").slice(22);
      if(dMessage.length < 1) return message.reply('¡Debes enviar un mensaje!')
      dUser.send(`${dMessage}`)
      message.author.send(`${message.author} Has enviado tu mensaje a ${dUser}`)
  }
}