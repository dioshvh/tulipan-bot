const Discord = require("discord.js");
module.exports = {
    name: "say",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Manda tu msg",
    usage: "say <texto>",
    run: async (client, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    if (!sayMessage) return message.channel.send("Por favor introduzca el texto");
    message.channel.send(`${sayMessage}`);
  }
}