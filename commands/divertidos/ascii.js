const Discord = require("discord.js");
const figlet = require('figlet');
module.exports = {
    name: "ascii",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Manda tu msg con una fuente ascii",
    usage: "ascii <texto>",
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send('Por favor, proporcione algún texto...');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Algo salió mal.');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Por favor, proporcione un texto de menos de 2000 caracteres')

            message.channel.send('```' + data + '```')
        })
    }
}