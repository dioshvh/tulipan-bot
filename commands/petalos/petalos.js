const Discord = require("discord.js");
const { COLOR } = require("../../config.json")
const db = require("quick.db");
module.exports = {
    name: "petalos",
    aliases: ["dinero","monedero","balance"],
    category: "<:dash_logo:832271934775361606> petalos ",
    description: "Mira el balance de las personas, o el tuyo",
    usage: "petalos @user",
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
    .setColor(COLOR)
    .setTitle(`Balance De ${user.tag}`)
    .addField("<a:Roses:832495000804786176> Pétalos", `$${(balance).toLocaleString()}`)
    .setThumbnail(user.displayAvatarURL({size: 4096, dynamic: true}))
    return message.channel.send(embed);
}
}