const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");
module.exports = {
name: "darp",
aliases: ["darpetalos"],
category: "<:dash_logo:832271934775361606> petalos ",
description: "Consigue dinero gratis",
usage: "darp",
run: async (client, message, args) => {
const balance = db.get(`account.${message.author.id}.balance`);
if (!["463212151897587723", "830029216509853726"].includes(message.author.id)) return message.channel.send('Solo nosoyz puede usar este comando');  
  let user;
if (message.mentions.users.first()) {user = message.mentions.users.first();
} else if (args[0]) {user = message.guild.members.cache.get(args[0]).user;}
  let amount = parseInt(args[1])
if (!amount) return message.channel.send("Por favor, introduzca los <a:Roses:832495000804786176> Pétalos que desea regalar..");
  if (isNaN(amount)) return message.channel.send("Por favor, introduzca un número válido.");
await db.add(`account.${user.id}.balance`, amount);
  return message.channel.send(`**${user.tag}!** Toma tus <a:Roses:832495000804786176> ${amount} Pétalos`); 
}
}