const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
    name: "transferir",
    aliases: ["transfer"],
    category: "<:dash_logo:832271934775361606> petalos ",
    description: "Transfiere dinero a alguien",
    usage: "transferir <200>",
    run: async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    }

    let balance = db.get(`account.${message.author.id}.balance`);

    if (!user) return message.channel.send("Por favor, mencione el usuario o introduzca el ID de usuario.");
    if (user.bot || user === client.user) return message.channel.send("El usuario es un bot.");
    if (user.id === message.author.id || user === message.author) return message.channel.send("¿Por qué quieres transferirte <a:Roses:832495000804786176> Pétalos a ti mismo?");

    let amount = parseInt(args[1]);
    if (!amount) return message.channel.send("Por favor, introduzca los <a:Roses:832495000804786176> Pétalos que desea transferir..");
    if (isNaN(amount)) return message.channel.send("Por favor, introduzca un número válido.");

    if (!balance || balance == 0) return message.channel.send("Su cartera está vacía.");
    if (amount > balance) return message.channel.send("No tienes suficientes <a:Roses:832495000804786176> Pétalos para transferirlos. Eso es demasiado.");
    if (amount === 0) return message.channel.send("Te transfieres, ¿nada? No. No puedes.");
if (amount < 0 ) return message.channel.send("No puedes transferir menos de 0 petalos")
    await db.add(`account.${user.id}.balance`, amount);
    await db.subtract(`account.${message.author.id}.balance`, amount);

    return message.channel.send(`Has Tranferido a (${user.tag}) $${amount} <a:Roses:832495000804786176> Pétalos!`);
}
}