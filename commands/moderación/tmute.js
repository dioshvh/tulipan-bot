const ms = require ("ms");
const db = require("quick.db")

module.exports = {
  name: "tmute",
  aliases: ["mute","tm"],
  category: "<:dash_logo:832271934775361606> administracion ",
  usage: "tmute <user> <tiempo>",
  description: "Mutea a un usuario durante <tiempo>",
  run: async (client, message, args) => {
  let user = message.mentions.members.first();
  let tiempo = args[1];
  let razon =  args.slice(2).join(" ");
//verificamos si tiene permisos de mutear
if(!message.member.hasPermission("MUTE_MEMBERS")){
return message.reply("Necesitas el permiso `MUTE_MEMBERS`.")
}

//verificamos que cumplalas variables
if(!user){
return message.reply("Menciona al usuario!.")
}
if(!tiempo){
return message.reply("Cuando tiempo, ejemplo `10s, 10h...`.")
}
if(!razon){
return message.reply("Escribe la razon.")
}


  let muterole;
 //Si se encuentra un rol con el nombre Muteado, re-definimos "muterole"
  if (message.guild.roles.cache.find(x => x.name == "• MUTEADO •")) {
        muterole = message.guild.roles.cache.find(x => x.name == "• MUTEADO •").id
        }else{ 
 // de lo contrario creamo el rol
        let createrol = await message.guild.roles.create({
            data: {
                name: '• MUTEADO •',
            }
        })
        //ilo definimos a la variable
        muterole = createrol.id
    }
    //Esto obtendrá todos los canales del servidor y modificará los permisos del rol, denegando que envíe mensajes
    message.guild.channels.cache.forEach(async (channel) => { 
        await channel.updateOverwrite(muterole, {
            SEND_MESSAGES: false,
        });
    });

  //obtenemos el rol de la variable "muterole"
let muterol = message.guild.roles.cache.get(muterole);
//mensaje de respuesta
user.send(`estas muteado! durante: **${ms(ms(tiempo))}** razon: **${razon}**`)
user.roles.add(muterol)
 message.channel.send("<@"+user+`> fue muteado! durante: **${ms(ms(tiempo))}** razon: **${razon}**`)
  
//creamos un settimeout para que cuando se termine el tiempo establecido quite el rol
setTimeout(() => {
  user.roles.remove(muterol).catch(console.error)
  user.send("Desmuetado!")
}, ms(tiempo));
}}