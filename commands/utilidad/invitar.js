  
const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../../config.json")
module.exports = {
    name: "invitar",
    aliases: ["inv","invitacion"],
    category: "<:dash_logo:832271934775361606> utilidad ",
    description: "añade a Tulipán a tu servidor",
    usage: "Enlace de invitación",
    run: async (client, message, args) => {

    var permissions = 8;
    
    let invite = new MessageEmbed()
    .setTitle(`<a:check_raveninha:832234420848820235> · Invita a ${client.user.username} Aquí`)
    .setURL(`https://tulipan-bot.glitch.me`)
    .setColor(COLOR)
    return message.channel.send(invite);
  },
};