const db = require("megadb")
const db_marry = new db.crearDB("marry")
const Discord = require("discord.js")
const fs = require("fs");

module.exports = {
  name: "casarse",
  alias: ["marry"],
  category: "<:dash_logo:832271934775361606> roleplay ",
  description: "Este comando sirve para poder proponer e casarse con una persona.",
  run: (client, message, args) => {

    const usuario = message.mentions.users.first() ||  client.users.get(args[0]);// Hacemos que la persona la que quiera proponer matrimonio pueda mencionar o poner una ID

    if (!usuario) return message.channel.send("Debes mencionar a una persona para poder casarte.") // Si la persona no menciona o pone ID de un usuario valido enviara este mensaje.
    if (usuario.id === message.author.id) return message.channel.send("No te puedes casar contigo mismo, F");
    if(db_marry.tiene(usuario.id)) return message.channel.send("Esta persona ya esta casada.") // Envia este mensaje si la persona que mencionan ya esta casada.

    if(db_marry.tiene(message.author.id)) return message.channel.send("<a:uncheck_raveninha:832234474883645460> Tu ya estas casado con alguien.") // Envia este mensaje si la persona que propone matrimonio esta casada.
    
    message.channel.send(`${usuario} aceptas a ${message.author} como tu legitimo(a) esposo(a)?`) // Envia el mensaje para proponer matrimonio a la persona.

    const collector = message.channel.createMessageCollector(m => m.author.id === usuario.id && m.channel.id === message.channel.id, {time : 30000}); // Ponemos que tiene 3 segundos para poder responder a este mensaje.
    
    collector.on("collect", collected => { 
    if (collected.content.toLowerCase() === "si"){ 
        message.channel.send("Los declaro marido y mujer.") // Envia este mensaje si la respuesta de la persona que mencionaron es "yes"
        db_marry.establecer(message.author.id, {id: usuario.id, tag: usuario.username}) /
        db_marry.establecer(usuario.id, {id: message.author.id, tag: message.author.username}) // Enviamos esto a la base de datos.
        
    } else if (collected.content.toLowerCase() === "no"){ 
        message.channel.send("Esta ceremonia a terminado.") // Si la respuesta es no enviara este mensaje.
    }
});

collector.on("end", collected => { 
    if (collected.size === 0) return message.channel.send("Lamentablemente la persona con la que se pensaba casar no llego a tiempo a la iglesia, lo sentimos pero esto no puede llevarse a cabo. :rolling_eyes:"); // Si la persona no responde en los 3 segundos de espera, enviara esta respuesta.
      });
    
    }
  }