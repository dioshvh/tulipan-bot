const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");
module.exports = {
    name: "trabajar",
    aliases: ["work"],
    category: "<:dash_logo:832271934775361606> petalos ",
    description: "Consigue dinero trabajando",
    usage: "trabajar",
    run: async (client, message, args) => {
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let cooldown = 600000;
    let amount = Math.floor(Math.random() * 80) + 1;

    let lastWork = await db.get(`lastWork.${message.author.id}`);
    let buck = await db.get(`account.${message.author.id}.balance`);

    var list = [
			'Trabajaste de minero y ganaste',
      'Trabajaste de camarero y ganaste',
      'Trabajaste de taxista y ganaste',
      'Trabajaste de pescador y ganaste',
      'Trabajaste de leñador y ganaste',
      'Hiciste un directo y se suscribieron varias personas... ganaste'
		];
	  var jobs = list[Math.floor(Math.random() * list.length)];

    try {
        
        if (lastWork !== null && cooldown - (Date.now() - lastWork) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastWork));

            let hours = pad_zero(timeObj.hours).padStart(2, "0"),
                mins = pad_zero(timeObj.minutes).padStart(2, "0"),
                secs = pad_zero(timeObj.seconds).padStart(2, "0");

            let finalTime = `**${hours}:${mins}:${secs}**`;
            return message.channel.send(`Ya has trabajado espera ${finalTime} minutos`);
        } else {
            db.set(`lastWork.${message.author.id}`, Date.now());
            db.add(`account.${message.author.id}.balance`, amount);
            return message.channel.send(`**${message.author.tag}!** ${jobs} <a:Roses:832495000804786176> ${amount} Pétalos`);
        }

    } catch (error) {
        console.log(error);
        return message.channel.send(`Error desconocido supongo: ${error}`);
    }
}
}