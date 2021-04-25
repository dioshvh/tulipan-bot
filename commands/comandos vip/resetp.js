const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");
module.exports = {
name: "resetp",
aliases: ["rp"],
category: "<:dash_logo:832271934775361606> petalos ",
description: "resetea los petalos",
usage: "darp",
run: async (client, message, args) => {
const balance = db.get(`account.${message.author.id}.balance`);
if (!["463212151897587723", "830029216509853726"].includes(message.author.id)) return message.channel.send('Solo nosoyz puede usar este comando');  
let user;
if (message.mentions.users.first()) {user = message.mentions.users.first();
} else if (args[0]) {user = message.guild.members.cache.get(args[0]).user;
} else {user = message.author;} 
await db.delete(`account.${user.id}.balance`);
return message.channel.send(`**${user.tag}!** tus <a:Roses:832495000804786176> Pétalos han sido eliminados`); 
}
}