const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");
const util = require("../../util/pagination");

module.exports = {
    name: "lista",
  aliases: ["queue"],
  category: "<:dash_logo:832271934775361606> musica ",
  usage: "lista",
  description: "te muestro las canciones en cola",
  run: async (client, message, args) => {

        const permissions = message.channel.permissionsFor(message.client.user);
        if (!permissions.has(["MANAGE_MESSAGES", "ADD_REACTIONS"])) return sendError("Me Faltan permisos para gestionar los mensajes o añadir reacciones", message.channel);

        const queue = message.client.queue.get(message.guild.id);
        if (!queue) return sendError("No hay nada que reproducir en este servidor.", message.channel);

        const que = queue.songs.map((t, i) => `\`${++i}.\` | [\`${t.title}\`](${t.url}) - [<@${t.req.id}>]`);

        const chunked = util.chunk(que, 10).map((x) => x.join("\n"));

        const embed = new MessageEmbed()
            .setAuthor("Server Songs Queue", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
            .setThumbnail(message.guild.iconURL())
            .setColor("BLUE")
            .setDescription(chunked[0])
            .addField("Sonando", `[${queue.songs[0].title}](${queue.songs[0].url})`, true)
            .addField("Canal de Texto", queue.textChannel, true)
            .addField("Canal de Voz", queue.voiceChannel, true)
            .setFooter(`Volumen del Servidor Actual ${queue.volume} Pagina 1 de ${chunked.length}.`);
        if (queue.songs.length === 1) embed.setDescription(`No hay canciones para reproducir a continuación añade canciones play <Nombre de la cancion>`);

        try {
            const queueMsg = await message.channel.send(embed);
            if (chunked.length > 1) await util.pagination(queueMsg, message.author, chunked);
        } catch (e) {
            msg.channel.send(`Se ha producido un error: ${e.message}.`);
        }
    },
};