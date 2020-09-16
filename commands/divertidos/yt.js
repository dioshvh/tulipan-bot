const ytsr = require('ytsr');
module.exports = {
    name: "yt",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Busca un video de YT",
    usage: "yt <nombre del video>",
    run: async (client, message, args) => {
const query = args.join(" ");
if(!query) return message.channel.send("Por favor escribe lo que quieres que busque");
const res = await ytsr(query).catch(e => {
	return message.channel.send("No se encontraron resultados!");
});
const video = res.items.filter(i => i.type === "video")[0];
if(!video) return message.channel.send("No se encontraron resultados!");
message.channel.send(`<:logonc:750704904972140598> » **[${video.link}]**`)
}}