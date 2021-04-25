const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
const { COLOR ,token, default_prefix } = require("../../config.json");

module.exports = {
  name: "ayuda",
  description:
    "Obten una lista de todos los comandos e incluso conocer los detalles de cada comando",
  usage: "ayuda <cmd>",
  aliases: ["comandos", "help","commands"],
    category: "<:dash_logo:832271934775361606> informativos ",
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Comando Desconozido: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Descripción", command.description || "No se proporciona :(")
        .addField("Uso", "`" + command.usage + "`" || "No se proporciona")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(COLOR)
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription("Tulipán | COMANDOS")
        .setColor(COLOR)
        .setFooter(`${default_prefix}ayuda <comando> para obtener información detallada`, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL());

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "solo staff";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }

      return message.channel.send(emx);
    }
  }
};