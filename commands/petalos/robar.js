const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const { COLOR } = require("../../config.json")
module.exports = {
    name: "robar",
    aliases: ["rob"],
    category: "<:dash_logo:832271934775361606> petalos ",
    description: "Robale Pétalos a un usuario",
    usage: ".robar @user",
    run: async (client, message, args) => {

let user = message.mentions.users.first();
let random = Math.floor(Math.random() * 100) + 1; 
let lastRob = await db.get(`lastRob.${message.author.id}`);
let buck = await db.get(`account.${message.author.id}.balance`);
    let pad_zero = num => (num < 10 ? '0' : '') + num;
    let cooldown = 1.08e+7;

if(!user)return message.channel.send('Menciona a quien quieras robar')


let author = `account.${message.author.id}.balance`;

if(author === user) return message.channel.send('No puedes robarte a ti mismo')


let authorBal = db.fetch(`account.${message.author.id}.balance`);


if(author < 100) return message.channel.send('<a:uncheck_raveninha:832234474883645460> Necesitas 100 Pétalos para poder robar')


let userBal = db.fetch(`account.${user.id}.balance`);


if (userBal < 100 ) {
    message.channel.send(`¡Acabas de intentar robar a una persona pobre! , has perdido <a:Roses:832495000804786176> ${random} Pétalos`)
    db.subtract(`account.${message.author.id}.balance`, random);
    return;
}


if (lastRob !== null && cooldown - (Date.now() - lastRob) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastRob));

            let hours = pad_zero(timeObj.hours).padStart(2, "0"),
                mins = pad_zero(timeObj.minutes).padStart(2, "0"),
                secs = pad_zero(timeObj.seconds).padStart(2, "0");

            let finalTime = `**${hours}:${mins}:${secs}**`;
            return message.channel.send(`Ya has robado , espera ${finalTime}`);
            }
else {
const embed = new Discord.MessageEmbed()
.setColor(COLOR)
.setTitle(`${message.author.username} le ha robado a ${user.username} <a:Roses:832495000804786176> ${random} Pétalos!`)
.setDescription(`Mala suerte ${user.username}`);
db.set(`lastRob.${message.author.id}`, Date.now());
db.add(`account.${message.author.id}.balance`, random); 
db.subtract(`account.${user.id}.balance`, random)

message.channel.send(embed)
}
}
}