const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "aumentar",
    aliases: ["zoom"],
    category: "<:dash_logo:832271934775361606> utilidad ",
    description: "aumenta el emoji",
    usage: "aumentar <emoji>",
    run: async (client, message, args) => {
    const emoji = args[0];
    if (!emoji) return message.channel.send("No ha proporcionado un emoji!");

    let custom = Discord.Util.parseEmoji(emoji);
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM');

    if (custom.id) {
        embed.setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
        return message.channel.send(embed);
    }
    else {
        let parsed = parse(emoji, { assetType: "png" });
        if (!parsed[0]) return message.channel.send("Emoji invalido!");

        embed.setImage(parsed[0].url);
        return message.channel.send(embed);
    }

}
}