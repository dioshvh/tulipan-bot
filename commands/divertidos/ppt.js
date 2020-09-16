const Discord = require("discord.js");
module.exports = {
    name: "ppt",
    category: "<:gmnc:750760163551739915> ▸ divertidos ",
    description: "Juego de Piedra , Papel o Tijeras",
    usage: "ppt , papel | ppt , piedra | ppt , tijeras",
    run: async (client, message, args) => {
            if (!args[1]) {
            return message.channel.send('Por favor elije una opción ▸ ``ppt , papel | ppt , piedra | ppt , tijeras``')
        }

        let choices = ['piedra', 'papel', 'tijeras'];
        if (choices.includes((args[1]).toLowerCase())) {
            let number = Math.floor(Math.random() * 3);
            if (number == 1) {
                return message.channel.send('Fue un empate, ambos teníamos ' + (args[1]).toLowerCase())
            }
            if (number == 2) {
                if ((args[1]).toLowerCase() == "piedra") {
                    return message.channel.send('Gané, saqué ``📄`` | papel.')
                }
                if ((args[1]).toLowerCase() == "papel") {
                    return message.channel.send('Gané, saqué ``✂`` | tijeras.')
                }
                if ((args[1]).toLowerCase() == "tijeras") {
                    return message.channel.send('Gané, saqué ``🌑`` | piedra.')
                }
            }
            if (number == 0) {
                if ((args[1]).toLowerCase() == "piedra") {
                    return message.channel.send('Tú ganaste, yo tenía ``✂`` | tijeras.')
                }
                if ((args[1]).toLowerCase() == "papel") {
                    return message.channel.send('Tú ganaste, yo tenía ``🌑`` | piedra.')
                }
                if ((args[1]).toLowerCase() == "tijeras") {
                    return message.channel.send('Tú ganaste, yo tenía ``📄`` | papel.')
                }
            }
        } else {
            return message.channel.send('Por favor, incluya:``🌑`` | piedra,``📄`` | papel, o ``✂`` | tijeras.')
        }
    }
}