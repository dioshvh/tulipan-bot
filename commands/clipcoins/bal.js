const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
    name: "bal",
    category: "<:mnnc:750761579871600760> ▸ clipcoins ",
    description: "Mira el balance de las personas, o el tuyo",
    usage: ".bal @user",
    run: async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else {
        user = message.author;
    }
    if (user.bot || user === client.user) {
        return message.channel.send("Este usuario es un bot.");
    }
    let balance = db.get(`account.${user.id}.balance`);
    if (!balance) balance = 0;
    else balance = balance;
    const embed = new Discord.MessageEmbed()
    .setColor(0x7289DA)
    .setTitle(`Balance De ${user.tag}`)
    .addField("ClipCoins", `$${(balance).toLocaleString()}`)
    .setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
    return message.channel.send(embed);
}
}