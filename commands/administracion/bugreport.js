const Discord = require('discord.js')
const client = new Discord.Client();
const myID = '463212151897587723'
var lockedList = ['userID1', 'userID2'];

module.exports = {
    name: "bugreport",
    category: "<:cmdnc:750759170260598846> ▸ administracion ",
    description: "Envia un reporte de un bug relacionado con el BOT",
    usage: "bugreport <reporte>",
    run: async (client, message, args) => {
        const person = message.author.username
        const userID = message.author.id

if (userID == lockedList) {
message.channel.send('***Usted ha abusado de esta característica antes y como tal ha sido puesto en una lista negra***')
} else {
let bug = args.slice(0).join(' ');          
if (!bug) {
message.channel.send('Está intentando enviar un informe de fallo sin listar un fallo!')
} else {
client.users.fetch(myID).then((user) => {
user.send(`${person} de ${message.guild.name} (Server ID: ${message.guild.id}, User ID: ${userID}) reportó el bug: ${bug}`);
});
message.channel.send('**Se informó de su error. Si usted abusa de esta característica será puesto en una lista negra y se le impedirá usar este comando.**');
}
}
}
}