const Discord = require("discord.js");
const client = new Discord.Client();
const canvacord = require("canvacord");
module.exports = {
    name: "trigger",
    aliases: ["tiggrered"],
    category: "<:dash_logo:832271934775361606> divertidos ",
    description: "Manda tu avatar modificado",
    usage: "trigger <usuario>",
    run: async (client, message, args) => {
      let user;
      if (message.mentions.users.first()) {
      user = message.mentions.users.first();
      } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]).user;
      } else {
      user = message.author;} 
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
    }
    }