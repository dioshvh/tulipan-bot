const Discord = require("discord.js");
const client = new Discord.Client();
const canvacord = require("canvacord");
module.exports = {
    name: "basura",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Lo que ves no es basura, es tu amigo",
    usage: ".basura <usuario>",
    run: async (client, message, args) => {
let user;
if (message.mentions.users.first()) {
user = message.mentions.users.first();
} else if (args[0]) {
user = message.guild.members.cache.get(args[0]).user;
} else {
user = message.author;} 
let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
let image = await canvacord.trash(avatar);
let attachment = new Discord.MessageAttachment(image, "trash.png");
return message.channel.send(attachment);
}
}