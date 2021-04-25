const Discord = require("discord.js")
const malScraper = require('mal-scraper')
let translate = require('google-translate-api');
module.exports = {
    name: "anime",
    aliases: ["animestats"],
    category: "<:dash_logo:832271934775361606> informativos ",
    description: "Escribe el nombre de anime para darte informacion",
    run: async (client, message, args) => {
    const search = args.join(' ')
    if(!search) return message.reply("**❌| Porfavor pon un mensaje**")
    const embed = new Discord.MessageEmbed()
      .setAuthor("Tulipán | Anime", client.user.avatarURL)
      .setDescription("**Escribe el nombre de anime para darte informacion!**")
      .setColor("RANDOM")
      .setImage("https://cdn.dribbble.com/users/2046015/screenshots/4612577/interface_2_grlb.gif")
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp(message.createdAt)
  
    if (!args) return message.channel.send({embed});
  
  const dembed = new Discord.MessageEmbed()
  .setAuthor(' | Buscando el anime "' + args.join(' ') + '"',"https://i.imgur.com/EwVXYmf.gif")
  .setDescription("Por favor, espera mientras busco la informacion del anime que pediste")
  .setImage ('https://cdn.dribbble.com/users/483592/screenshots/2402509/blue-2.gif')
  .setColor("RANDOM")
  
  
message.channel.send(dembed).then(m => {
  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.MessageEmbed()
      
      .setAuthor("Tulipán | Anime", client.user.avatarURL)
      .setDescription("Informacion del Anime que buscaste!")
     .addField("``🔎`` Resultado de tu Busqueda **" + args.join(' ') + "**", "** **")
      .addField('``🎌`` Título en Japonés', data.japaneseTitle, true)
      .addField('``📅`` Fecha de transmisión', data.aired, true)
      .addField("** **", "** **")
      .addField('``📺`` Tipo', " " + data.type, true)
      .addField('``🔞`` Edad', data.rating, true)
      .addField("** **", "** **")
      .addField("``🌀`` Género", data.genres, true)
      .addField('``💾`` Capítulos', data.episodes, true)
      .addField("** **", "** **")
      .addField('``🌟`` Calificación Media', data.score, true)
      .addField('``✨`` Calificaciones Totales', data.scoreStats, true)
      .setThumbnail(data.picture)
      .addField("** **", "** **")
      .addField('``📲`` Ver Anime', '[» Click Aquí «](' + data.url + ')', true)
      .addField("``📟`` Trailer del Anime", data.trailer || "¡No hay ningún trailer disponible!" , true)
      .setColor("RANDOM")
      .setImage("https://cdn.dribbble.com/users/787686/screenshots/2534334/sit_down.gif")
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp(message.createdAt)

      m.edit(malEmbed);
    


}).catch((err) => {
    const error = new Discord.MessageEmbed()
    .setAuthor("Tulipán | Anime busqueda erronea", client.user.avatarURL)
    .setDescription('``❌ `` | Lo siento **' + message.author.tag + "** pero no hay resultado para el Anime  **" + args.join(' ') + "** el nombre esta mal o no existe")
    .setImage ("https://cdn.dribbble.com/users/1022481/screenshots/3018253/404-snow.gif")
    m.edit(error)
}) 
});  

}}