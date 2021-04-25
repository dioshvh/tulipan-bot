const Discord = require("discord.js");
const {MessageAttachment} = require('discord.js');
const fetch = require('node-fetch');
const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: "perrito",
    aliases: ["perro","dog","perros","perritos"],
    category: "<:dash_logo:832271934775361606> divertidos ",
    description: "Manda una imagen de un perro",
    usage: "perro",
    run: async (client, message, args) => {
    const {body} = fetch('https://nekos.life/api/v2/img/woof').then(res => res.json()).then(result => {
    if (!result.url) return message.channel.send("Algo salió mal..");

    const gdembed = new Discord.MessageEmbed()
	  .setTitle('<:waving_puppy:832622668363858000> · Perritos ')
	  .setImage(result.url);
    message.channel.send(gdembed);
    })
  }
}