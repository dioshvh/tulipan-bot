const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const keepAlive = require('./server');
const Monitor = require('ping-monitor');
const Discord = require("discord.js");
const fs = require("fs");
const { readdirSync } = require("fs");
const express = require('express')
const server = express();
const { join } = require("path");
const db = require("quick.db")
const { addexp } = require("./handlers/xp.js")
const { token, default_prefix } = require("./config.json");
const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });

client.commands = new discord.Collection()
client.queue = new Map();
client.vote = new Map();
client.commands = new Collection();
client.aliases = new Collection();
["command"].forEach(handler => {require(`./handlers/${handler}`)(client);})

keepAlive();
const monitor = new Monitor({website: 'https://tulipan-sv.auravaca.repl.co',
title: 'Secundario',interval: 15 })
monitor.on('up', res => console.log(`${res.website} está encedido.`));
monitor.on('down', res =>console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', website => console.log(`${website} se ha parado.`));
monitor.on('error', error => console.log(error));

client.once('ready', () => {console.log('Tulipán ON');
let statuses = ['[🌷] Tulipán','t!ayuda',`[🎀] ${client.guilds.cache.size} Servidores`];
setInterval(function() {
let status = statuses[Math.floor(Math.random() * statuses.length)];
client.user.setActivity(status, { type: 'PLAYING' });}, 5000);})

client.on("message", async message => {
if (!message.guild) return;
let prefix = db.get(`prefix_${message.guild.id}`);
if (prefix === null) prefix = default_prefix;
if (!message.content.startsWith(prefix)) return;
if(message.author.bot) return;
if(message.channel.type === "dm") return;

addexp(message)
if (!message.content.startsWith(prefix)) return;
if (!message.member) message.member = await message.guild.fetchMember(message);
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();
if (cmd.length === 0) return;
let command = client.commands.get(cmd);
if (!command) command = client.commands.get(client.aliases.get(cmd));
if (command) 
command.run(client, message, args);
});
client.login(token);