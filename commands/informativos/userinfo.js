const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");
const moment = require('moment');

module.exports = {
  name: "userinfo",
  aliases: ["whois", "user"],
  category: "<:logonc:750704904972140598> ▸ informativos ",
  usage: "userinfo <USER>",
  description: "Recive informacion del usuario",
  run: async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No puedes usar ese comando!")
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
      if (member.presence.status === 'dnd')
        member.presence.status = 'No Molestar';
      if (member.presence.status === 'online') member.presence.status = 'Online';
      if (member.presence.status === 'idle') member.presence.status = 'Idle';
      if (member.presence.status === 'offline')
        member.presence.status = 'offline';
      let x = Date.now() - member.createdAt;
      let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
      const joined = Math.floor(y / 86400000);
      const joineddate = moment
        .utc(member.joinedAt)
        .format('dddd, MMMM Do YYYY, HH:mm:ss');
      let status = member.presence.status;
      const userEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTimestamp()
        .setColor('BLUE')
        .setImage(member.user.displayAvatarURL())
        .addField('<a:2306_verify_blue_style:732957843761659924> ID de usuario',member.id)
        .addField('<:6648_dataemoji:733679242943922216> Roles',`<@&${member._roles.join('> <@&')}>`)
        .addField('<a:8527_discord_loading:732957843501875300> Cuenta creada el:',` ${moment.utc(member.user.createdAt).format('dddd, MMMM Do YYYY')}`,true)
        .addField('<:users_logo:733320896906788864> Entro al servidor el',`${joineddate} \n> ${joined} day(S) Ago`)
        .addField('<a:6181_check:732704035655778365> Estado', status);
      message.channel.send(userEmbed);
    }
  }