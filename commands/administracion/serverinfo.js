const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "serverinfo",
  category: "<:cmdnc:750759170260598846> ▸ administracion ",
  usage: ".serverinfo",
  description: "Obten información detallada del servidor",
  run: async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No puedes usar ese comando!")
let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }
        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#a14ea0')
            .setTitle(`${message.guild.name}`)
            .addFields(
                {
                    name: "<:733679241874636871:752493494840459304> ▸ Owner: ",
                    value: message.guild.owner.user.tag,
                    inline: false
                },
                {
                    name: "<:usnc:750762153669034034> ▸ Miembros: ",
                    value: `Hay ${message.guild.memberCount} usuarios!`,
                    inline: false
                },
                {
                    name: "<:3619_discord_online:748617396155187220> ▸ Mienbros conectados: ",
                    value: `Hay ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} usuarios conectados!`,
                    inline: false
                },
                {
                    name: "<:zlogo:752232141475283094> ▸ Bots: ",
                    value: `Hay ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "🛠 ▸ Fecha de creación: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: false
                },
                {
                    name: "<:733679242943922216:752494400906723361> ▸ Roles: ",
                    value: `Hay ${message.guild.roles.cache.size} roles en este server.`,
                    inline: true,
                },
                {
                    name: `🗺 ▸ Región: `,
                    value: region,
                    inline: false
                },
                {
                    name: `<:ae0db1b59b53e7057a10ec0cea023730:752495638645571675> ▸ Verificado: `,
                    value: message.guild.verified ? 'Servidor verificado' : `El servidor no está verificado`,
                    inline: true
                },
                {
                    name: '<:3670_NitroBoost:752496206583693392> ▸ Boosts: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Hay ${message.guild.premiumSubscriptionCount} Boosts` : `No han Boosteado el Servidor`,
                    inline: false
                },
                {
                    name: "<:gmnc:750760163551739915> ▸ Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Hay ${message.guild.emojis.cache.size} emojis!` : 'No hay emojis' ,
                    inline: true
                },
				        {
                   name: '💤 ▸ Tiempo de espera AFK',
                   value: message.guild.afkTimeout / 60,
                   inline: false
                }
				
            )
        await message.channel.send(embed)
    }
}