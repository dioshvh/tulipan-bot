const Discord = require("discord.js");
const client = new Discord.Client();
const canvacord = require("canvacord");
module.exports = {
    name: "clyde",
    description: "Manda un mensaje de parte de Clyde",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    usage: ".clyde <mensaje>",
    run: async (client, message, args) => {
const text = args.join(" ");
let image = await canvacord.clyde(text);
let attachment = new Discord.MessageAttachment(image, "clyde.png");
return message.channel.send(attachment);
}
}