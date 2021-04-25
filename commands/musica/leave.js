const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
    name: "leave",
  aliases: ["desconectar","l","disconnect"],
  category: "<:dash_logo:832271934775361606> musica ",
  usage: "leave",
  description: "haz que el bot salga de llamada",
  run: async (client, message, args) => {

        let channel = message.member.voice.channel;
        if (!channel) return sendError("Lo siento pero necesitas estar en un canal de voz!", message.channel);
        if (!message.guild.me.voice.channel) return sendError("No estoy en ningún canal de voz!", message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("Intentando dejar el canal de la voz...", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("Dejar el canal de voz", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
            .setColor("GREEN")
            .setTitle("Bye uwu")
            .setDescription("🎶 Dejé el Canal de la Voz.")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("🎶 Dejé el Canal de la Voz :C"));
    },
};