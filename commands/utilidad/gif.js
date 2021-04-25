const fetch = require('node-fetch');
const Discord = require('discord.js');
const tenorapi = ("XZD8K7RY319N");
const { COLOR } = require("../../config.json")
module.exports = {
    name: "gif",
    category: "<:dash_logo:832271934775361606> utilidad ",
    description: "Manda el gif que busques",
    run: async (client, message, args) => {
    let text = args.join(" ")


    // Si text no se cumple va a a hacer un return
    if(!text) return message.channel.send('Que quieres que busque en tenor?')

    

    // Buscamos la imagen en tenor con fetch
fetch(`https://api.tenor.com/v1/random?key=${tenorapi}&q=${text}&limit=1`)
   .then(res => res.json())
   .then(json => {

     let gif = json.results[0].media[0].gif.url
     // creamos el embed
     const embed = new Discord.MessageEmbed()
     .setTitle('· <a:earthpink:832241128006090792> | Buscador de GIFS ·')
      .setColor(COLOR)
      .setFooter(`Solicitado por ${message.author.username}`)
      .setImage(gif)

     message.channel.send(embed)

    })  

    // Si hay un error es porque no encontró nada
    .catch(err => {

   message.channel.send(`No pude encontrar gifs de ${text}`).then(msg => msg.delete({timeout: 5000}));
      return console.error(err);
    });
    }
}