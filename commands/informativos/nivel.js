const db = require("quick.db")
const discord = require("discord.js")
const { getInfo } = require("../../handlers/xp.js")
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "nivel",
    aliases: ["lvl","level","xp"],
    category: "<:dash_logo:832271934775361606> informativos ",
    description: "Mira el nivel de XP que tienes",
    run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
      if(user.id === client.user.id) { //IF BOT
      return message.channel.send("<:info:763477080272011305> | Yo soy nivel 100")}
       if(user.bot) {
      return message.channel.send("Los bots no tienen nivel")
    } let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    if(xp === 0) return message.channel.send(`**${user.tag}** no tiene xp`)
    let embed = new discord.MessageEmbed()
    .setAuthor(user.username, message.guild.iconURL())
    .setColor("RANDOM")
    .setThumbnail(user.avatarURL())
    .addField("**NIVEL**", `▸ ${level}`)
    .addField("**XP**", `▸ ${remxp}/${levelxp}`)
    
 message.channel.send(embed)   }}