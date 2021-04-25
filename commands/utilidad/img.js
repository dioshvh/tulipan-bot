 var cheerio = require("cheerio"); 
var request = require("request"); 
var discord = require("discord.js");
var client = new discord.Client();
const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json")
module.exports = {
    name: "img",
    aliases: ["imagen"],
    category: "<:dash_logo:832271934775361606> utilidad ",
    description: "Busca una imagen en Google",
    usage: "img <TEXTO> <NUMERO>",
    run: async (client, message, args) => {
    var parts = message.content.split(" ");
    if (parts[0] === "!image") { 
        image(message, parts); 
    }
    var search = parts.slice(1).join(" ");
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
        $ = cheerio.load(responseBody); 
        var links = $(".image a.link");
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        if (!urls.length) {
            return;
        }
      let Embed = new MessageEmbed()
        .setTitle(`· <a:earthpink:832241128006090792> | Buscador de Imagenes ·`)
        .setImage(urls[0])
        .setColor(COLOR)
        .setFooter(`Solicitado por ${message.author.username}`)
      message.channel.send(Embed);
    });
}
}