const Discord = require("discord.js");
const {MessageAttachment} = require('discord.js');
const fetch = require('node-fetch');
const client = require('nekos.life');
const neko = new client();

module.exports = {
    name: "perro",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Manda una imagen de un perro",
    usage: ".perro",
    run: async (client, message, args) => {
      const {body} = fetch('https://nekos.life/api/v2/img/woof').then(res => res.json()).then(result => {
      if (!result.url) return message.channel.send("Algo salió mal..");
      const attachment = new MessageAttachment(result.url);
      message.channel.send(attachment);
    })
  }
}