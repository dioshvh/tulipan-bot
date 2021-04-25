const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
name: "gd",
aliases: ["geometrydash","geometry"],
category: "<:dash_logo:832271934775361606> divertidos ",
description: "Nivel de GD",
usage: "gd <texto> ",
run: async (client, message, args) => {
let char = ["gatekeeper", "gatekeeper.dark", "keymaster", "keymaster.huh", "keymaster.scared", "keymaster.scream", "monster", "monster.eyes", "potbor", "potbor.annoyed", "potbor.huh", "potbor.mad", "potbor.right", "potbor.talk", "potbor.tired", "scratch", "scratch.annoyed", "scratch.huh", "scratch.mad", "scratch.right", "scratch.talk", "shopkeeper", "shopkeeper.annoyed", "spooky"]
let color = ["blue", "brown", "purple", "aqua", "green", "grey", "orange", "pink", "red"]
let captura = char[Math.floor(char.length * Math.random())];  
let colorize = color[Math.floor(color.length * Math.random())];
let autor = message.author;  
let txt = args.join('%20');
if (!txt) return message.channel.send("Olvidaste colocar los argumentos.")
let attachment = `https://gdcolon.com/tools/gdtextbox/img/${txt}?${colorize}=purple&name=${autor.username}&char=${captura}`
const embed = new Discord.MessageEmbed()
.setImage(attachment);
message.channel.send(embed)
}
}