module.exports = {
    name: "desmutear",
    aliases: ["unmute"],
  category: "<:dash_logo:832271934775361606> administracion ",
    run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Lo siento, pero no tienes permiso para quitar el mute de nadie."
        ).then(msg => msg.delete({timeout: 5000}));
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("No tengo permiso para manejar los roles.");
      }
  
      const user = message.mentions.members.first();
  
      if (!user) {
        return message.channel.send(
          "Por favor, mencione el miembro al que quiere anular el silencio."
        );
      }
      
      let muterole = message.guild.roles.cache.find(x => x.name === "• MUTEADO •")
      
      
   if(user.roles.cache.has(muterole)) {
        return message.channel.send("El usuario no tiene el rol de **• MUTEADO •** nwn")
      }
      
      
      user.roles.remove(muterole)
      
      await message.channel.send(`**${message.mentions.users.first().username}** a sido desmuteado`)
      
      user.send(`Ya no estas muteado en **${message.guild.name}**`)
  
    }
  };