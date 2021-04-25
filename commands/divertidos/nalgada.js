const Discord = require("discord.js");
const client = new Discord.Client();
const canvacord = require("canvacord");
module.exports = {
    name: "nalgada",
    description: "Dale una nalgada a un usuario",
    category: "<:dash_logo:832271934775361606> divertidos ",
    usage: "nalgada <usuario>",
    run: async (client, message, args) => {
let user; 
if (message.mentions.users.first()) {
user = message.mentions.users.first();} else if (args[0]) {
user = message.guild.members.cache.get(args[0]).user;} 
if(!user) return message.channel.send('<a:uncheck_raveninha:832234474883645460> |Por favor mencione a un usuario')
let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
let avatar1 = user.displayAvatarURL({ dynamic: false, format: 'png' });
let image = await canvacord.spank(avatar , avatar1);
let attachment = new Discord.MessageAttachment(image, "spank.png");
return message.channel.send(attachment);
}
}