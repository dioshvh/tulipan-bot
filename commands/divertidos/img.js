 
var cheerio = require("cheerio"); 
var request = require("request"); 
var discord = require("discord.js");
var client = new discord.Client();
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "img",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Manda la imagen que busques",
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
        .setTitle(`˗ˏˋ <:logonc:750704904972140598> | Buscador de Imagenes ˎˊ˗`)
        .setImage(urls[0])
        .setColor('#a14ea0')
        .setFooter(`Solicitado por ${message.author.username}`)
      message.channel.send(Embed);
    });
}
}
    