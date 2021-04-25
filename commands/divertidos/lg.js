const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
name: "lg",
aliases: ["letragrande","bt","bigtext"],
category: "<:dash_logo:832271934775361606> divertidos ",
description: "Letra Grande",
usage: "lg <texto>",
run: async (client, message, args) => {
if (!args.length) return message.channel.send('Escriba un Mensaje');
message.channel.send(BigText(args.join(' ')));
function BigText(args) {const array = [];
for (letra of Array.from(args)) {
if (/\d/g.test(letra)) {
switch(letra) {
case '0':array.push(':zero:');
break;
case '1':array.push(':one:');
break;
case '2':array.push(':two:');
break;
case '3':array.push(':three:');
break;
case '4':array.push(':four:')
break;
case '5': array.push(':five:');
break;
case '6':array.push(':six:');
break;
case '7': array.push(':seven:');
break;
case '8':array.push(':eight:');
break;
case '9':array.push(':nine:');
break;}
} else if (/[^a-z]/gi.test(letra)) {array.push(letra);
} else { array.push(`:regional_indicator_${letra.toLowerCase()}:`);
}}return array.join(' ');
}}}