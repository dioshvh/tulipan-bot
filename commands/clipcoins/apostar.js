const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");
module.exports = {
    name: "apostar",
    category: "<:mnnc:750761579871600760> ▸ clipcoins ",
    description: "Apuesta un mínimo de 200",
    usage: "apostar 200",
    run: async (client, message, args) => {
   const amount = parseInt(args[0]);
    const result = Math.floor(Math.random() * 10);
    const balance = db.get(`account.${message.author.id}.balance`);

    if (!amount) return message.channel.send("Por favor, inserte una cantidad primero.");
    if (isNaN(amount)) return message.channel.send("La cantidad no era un número.");
    if (amount > balance || !balance || balance === 0) return message.channel.send("No tienes suficiente dinero.");
    
    // Optional:
    if (amount < 200) return message.channel.send("No tienes suficiente dinero para apostar. El mínimo es $200.");

    let cooldown = 25000; // 25 Seconds.
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let lastGamble = await db.get(`lastGamble.${message.author.id}`);

    if (lastGamble !== null && cooldown - (Date.now() - lastGamble) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastGamble));
        let second = pad_zero(timeObj.seconds).padStart(2, "0");
        return message.channel.send(`Wooo eso es demasiado rápido. Tienes que esperar **${second}** segundo(s) antes de que puedas volver a apostar.`);
    }

    // 50:50
    if (result < 5) {
        await db.set(`lastGamble.${message.author.id}`, Date.now());
        await db.subtract(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`Ahh, F. Tú pierdes $${amount}. Buena suerte la próxima vez..`);
    } else if (result > 5) {
        await db.set(`lastGamble.${message.author.id}`, Date.now());
        await db.add(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`Woohoo! Ganaste $${amount}! Buena suerte, diviértete.!`);
    }
}
}