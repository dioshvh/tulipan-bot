const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");
const moment = require('moment');
const { COLOR } = require("../../config.json")

module.exports = {
  name: "info",
  aliases: ["whois", "userinfo"],
    category: "<:dash_logo:832271934775361606> informativos ",
  usage: "userinfo <USER>",
  description: "Recive informacion del usuario",
  run: async (client, message, args) => {
      let userArray = message.content.split(' ');
      let userArgs = userArray.slice(1);
      let member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(userArgs[0]) ||
        message.guild.members.cache.find(
          x =>
            x.user.username.toLowerCase() === userArgs.slice(0).join(' ') ||
            x.user.username === userArgs[0]
        ) ||
        message.member;
      let x = Date.now() - member.createdAt;
      let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
      const joined = Math.floor(y / 86400000);
      const joineddate = moment
        .utc(member.joinedAt)
        .format('dddd, MMMM Do YYYY, HH:mm:ss');
      const userEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        .setColor(COLOR)
        .setImage(member.user.displayAvatarURL({dynamic: true}))
        .addField('<a:check_raveninha:832234420848820235> · ID de usuario',member.id)
        .addField('<:users_logo:832263195590656021> · Roles',`<@&${member._roles.join('> <@&')}>`)
        .addField('<a:discord_loading:832264650589470741> · Cuenta creada el:',` ${moment.utc(member.user.createdAt).format('dddd, MMMM Do YYYY')}`,true)
        .addField('<a:earthpink:832241128006090792> · Entro al servidor el',`${joineddate} \n> ${joined} day(S) Ago`)
      message.channel.send(userEmbed);
    }
  }