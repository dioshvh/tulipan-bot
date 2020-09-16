const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const discord = require("discord.js")
const { token, default_prefix } = require("./config.json");
const keepAlive = require('./server');
const Monitor = require('ping-monitor');
const fs = require("fs");
const express = require('express')
const server = express();
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const db = require("quick.db")
const { addexp } = require("./handlers/xp.js")
const { readdirSync } = require("fs");
const { join } = require("path");

keepAlive();
const monitor = new Monitor({
	website: 'https://noclip-server.auravaca.repl.run',
	title: 'Secundario',
	interval: 15 // minutes
});
monitor.on('up', res => console.log(`${res.website} está encedido.`));
monitor.on('down', res =>
	console.log(`${res.website} se ha caído - ${res.statusMessage}`)
);
monitor.on('stop', website => console.log(`${website} se ha parado.`));
monitor.on('error', error => console.log(error));

const client = new Client({
    disableEveryone: true
})
client.commands = new discord.Collection()
client.queue = new Map();
client.vote = new Map();
client.commands = new Collection();
client.aliases = new Collection();
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.once('ready', () => {
console.log('NoClip ON');
let statuses = [
'[🎬] NoClip | v1.2',
'[🛠] .help',
`[💿] ${client.users.cache.size} Usuarios`,
`[📀] ${client.guilds.cache.size} Servidores`
];
setInterval(function() {
let status = statuses[Math.floor(Math.random() * statuses.length)];
client.user.setActivity(status, { type: 'WATCHING' });
}, 5000);
});

client.on("message", async message => {

  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;
  if (!message.content.startsWith(prefix)) return;

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) 
    command.run(client, message, args);

    return addexp(message)
});

client.on("guildMemberAdd", async member => {
let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  
   let data = await canva.welcome(member, { link: "https://i.imgur.com/I8gLcvd.png" })

    const attachment = new discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
  
  


  client.channels.cache.get(chx).send("<a:9836_FakeBlob:748619922266914927> Bienvenid@ al Servidor , " + member.user.username, attachment);
});

client.login(token);