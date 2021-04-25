const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");
module.exports = {
    name: "apostar",
    aliases: ["gamble"],
    category: "<:dash_logo:832271934775361606> petalos ",
    description: "Apuesta un mínimo de 200",
    usage: "apostar <200>",
    run: async (client, message, args) => {
   const amount = parseInt(args[0]);
    const result = Math.floor(Math.random() * 10);
    const balance = db.get(`account.${message.author.id}.balance`);

    if (!amount) return message.channel.send("Por favor, inserte una cantidad primero.");
    if (isNaN(amount)) return message.channel.send("La cantidad no era un número.");
    if (amount > balance || !balance || balance === 0) return message.channel.send("No tienes suficientes <a:Roses:832495000804786176> Pétalos.");
    
    // Optional:
    if (amount < 200) return message.channel.send("No tienes suficientes <a:Roses:832495000804786176> Pétalos para apostar. El mínimo es <a:Roses:832495000804786176> 200 Pétalos.");

    let cooldown = 25000; // 25 Seconds.
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let lastGamble = await db.get(`lastGamble.${message.author.id}`);

    if (lastGamble !== null && cooldown - (Date.now() - lastGamble) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastGamble));
        let second = pad_zero(timeObj.seconds).padStart(2, "0");
        return message.channel.send(`Woooh! estas demasiado rápido. Tienes que esperar **${second}** segundo(s) antes de que puedas volver a apostar.`);
    }

    var wlist = [
      `Perdiste <a:Roses:832495000804786176> ${amount} Pétalos. Buena suerte la próxima vez..`,
      `F, Perdiste <a:Roses:832495000804786176> ${amount} Pétalos. Que mala suerte...`,
      `Que mala suerte! Perdiste <a:Roses:832495000804786176> ${amount} Pétalos.`,
      `Hoy no es tu dia! Perdiste <a:Roses:832495000804786176> ${amount} Pétalos.`
      ];
	  var lose = wlist[Math.floor(Math.random() * wlist.length)];

    var plist = [
      `Woohoo! Ganaste <a:Roses:832495000804786176> ${amount} Pétalos! Buena suerte, diviértete.!`,
      `GG te ganaste <a:Roses:832495000804786176> ${amount} Pétalos. Disfrutalos`,
      `Que Suerte! has ganado <a:Roses:832495000804786176> ${amount} Pétalos.`,
      `Ganaste <a:Roses:832495000804786176> ${amount} Pétalos!`
      ];
	  var win = plist[Math.floor(Math.random() * plist.length)];


    // 50:50
    if (result < 5) {
        await db.set(`lastGamble.${message.author.id}`, Date.now());
        await db.subtract(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`${lose}`);
    } else if (result > 5) {
        await db.set(`lastGamble.${message.author.id}`, Date.now());
        await db.add(`account.${message.author.id}.balance`, amount);
        return message.channel.send(`${win}`);
    }
}
}