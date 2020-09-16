const Discord = require("discord.js");
const client = new Discord.Client();
const canvacord = require("canvacord");
module.exports = {
    name: "caca",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "No es una caca , es tu amigo",
    usage: ".caca <usuario>",
    run: async (client, message, args) => {
let user;
if (message.mentions.users.first()) {
user = message.mentions.users.first();
} else if (args[0]) {
user = message.guild.members.cache.get(args[0]).user;
} else {
user = message.author;} 
let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
let image = await canvacord.shit(avatar);
let attachment = new Discord.MessageAttachment(image, "shit.png");
return message.channel.send(attachment);
}
}