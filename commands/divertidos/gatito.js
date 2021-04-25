const Discord = require("discord.js");
const {MessageAttachment} = require('discord.js');
const fetch = require('node-fetch');
const client = require('nekos.life');
const neko = new client();
module.exports = {
name: "gatito",
aliases: ["gato","cat","gatos","gatitos"],
category: "<:dash_logo:832271934775361606> divertidos ",
description: "Manda una imagen de un gato",
usage: ".gato",
run: async (client, message, args) => {
const {body} = fetch('https://nekos.life/api/v2/img/meow').then(res => res.json()).then(result => {
if (!result.url) return message.channel.send("Algo salió mal..");
const gdembed = new Discord.MessageEmbed()
.setTitle('<:catgirl_lurk:832241895686144060> · Gatitos ')
.setImage(result.url);
message.channel.send(gdembed);
})
}
}