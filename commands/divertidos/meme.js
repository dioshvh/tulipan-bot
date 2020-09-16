const got = require('got');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "meme",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Devuelve un meme",
    run: async (client, message, args) => {
const embed = new Discord.MessageEmbed()
got('https://www.reddit.com/r/SpanishMeme/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`)
            message.channel.send(embed);
        })
    }  
}    