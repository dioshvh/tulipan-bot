const Discord = require("discord.js");
const client = new Discord.Client();
const canvacord = require("canvacord");
module.exports = {
    name: "bofetada",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Pegale una buena bofetada a un usuario",
    usage: ".bofetada <ususario>",
    run: async (client, message, args) => {
let user;
if (message.mentions.users.first()) {
user = message.mentions.users.first();} else if (args[0]) {
user = message.guild.members.cache.get(args[0]).user;} 
if(!user) return message.channel.send('<:usnc:750762153669034034> |Por favor mencione a un usuario')
let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
let avatar1 = user.displayAvatarURL({ dynamic: false, format: 'png' });
let image = await canvacord.batslap(avatar , avatar1);
let attachment = new Discord.MessageAttachment(image, "batslap.png");
return message.channel.send(attachment);
}
}