const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json")
module.exports = {
    name: "avatar",
    aliases: ["av","pfp"],
    category: "<:dash_logo:832271934775361606> informativos ",
    description: "Mira el avatar de un usuario , o el tuyo",
    usage: "avatar <USUARIO>",
    run: async (client, message, args) => {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  } 
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
 
  const embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag}`)
  .setDescription(`[URL del Avatar **${user.tag}**](${avatar})`)
  .setColor(COLOR)
  .setImage(avatar)
  
  return message.channel.send(embed);
}
}