const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");
module.exports = {
    name: "diario",
    category: "<:mnnc:750761579871600760> ▸ clipcoins ",
    description: "Consigue dinero todos los dias",
    usage: ".diario",
    run: async (client, message, args) => {
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let cooldown = 8.64e+7; // 24 Hours in ms.
    let amount = 500; // How much user will get it in their dailies.

    let lastDaily = await db.get(`lastDaily.${message.author.id}`);
    let buck = await db.get(`account.${message.author.id}.balance`);

    try {
        
        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily));

            let hours = pad_zero(timeObj.hours).padStart(2, "0"),
                mins = pad_zero(timeObj.minutes).padStart(2, "0"),
                secs = pad_zero(timeObj.seconds).padStart(2, "0");

            let finalTime = `**${hours}:${mins}:${secs}**`;
            return message.channel.send(`Lo siento, no puede recoger sus Clipcoins diarios. Por favor, espere ${finalTime}.`);
        } else {
            db.set(`lastDaily.${message.author.id}`, Date.now());
            db.add(`account.${message.author.id}.balance`, amount);
            return message.channel.send(`Genial **${message.author.tag}!** Usted ha recibido 500 Clipcoins!`);
        }

    } catch (error) {
        console.log(error);
        return message.channel.send(`Error desconocido supongo: ${error}`);
    }
}
}