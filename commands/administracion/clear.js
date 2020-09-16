const Discord = require("discord.js");
module.exports = {
    name: "clear",
    category: "<:cmdnc:750759170260598846> ▸ administracion ",
    description: "Elimina de 0 a máximo 100 mensajes",
    usage: "clear 0<100",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No puedes usar ese comando!")
        const amount = args.join(' ');
        if (!amount)
            return message.reply(
                '¡No ha dado una cantidad de mensajes que deberían eliminarse!'
            );
        if (isNaN(amount))
            return message.reply('¡El parámetro de cantidad no es un número!');
        if (amount > 100)
            return message.reply('¡No puede borrar más de 100 mensajes a la vez!');
        if (amount < 1)
            return message.reply('¡Tienes que eliminar al menos 1 mensaje!');
        await message.channel.messages.fetch({ limit: amount }).then(messages => {
            message.channel.bulkDelete(messages);
    });
  }
}