const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: "ttt",
    aliases: ["tresenraya"],
    category: "<:dash_logo:832271934775361606> divertidos ",
    description: "3 en raya",
    usage: "ttt <usuario>",
    run: async (client, message, args) => {
    
    const ttt0 = message.member //definimos el autor del mensaje como jugador 0(usao member en vez de author para usar displayName, gusto personal ;))
		const ttt1 = message.mentions.members.first() //definimos el usuario mencionado como juagdor 1

			if(!ttt1)return message.channel.send("Menciona a un usuario para jugar contra el."); //si no mencionan a un usuario, le avisamos
			if(ttt0.id === ttt1.id)return message.channel.send("No puedes jugar contra ti mismo."); //si se menciona a sÃ­ mismo, le avisamos
			if(ttt1.user.bot)return message.channel.send("No puedes jugar contra un bot");//si el mencionado es un bot, le avisamos

			const pish0 = ":x:"//Definimos la ficha del jugador 0
			const pish1 = ":o:"//Defijimos la ficha del jugador 1

			let turn = 0//Como vamos a hacer un handler muy sencillo para los turnos, vamos a definir los turnos como 0, para que el jugador 0 inicie el juego

			//AquÃ­ hacemos una especie de cubo, definiremos linea por linea para una mejor gestiÃ³n de los edits, mucho mas sencilla
			let line1 =	['1️⃣', '2️⃣', '3️⃣']
			let line2 =	['4️⃣', '5️⃣', '6️⃣']
			let line3 =	['7️⃣', '8️⃣', '9️⃣']
			
			//AquÃ­ definimos un embed mÃ¡s estÃ©tico mientras cargan las reacciones
			const waiting = new Discord.MessageEmbed()
			.setDescription("Espera mientras cargan las reacciones.")
			.setColor(0x00fffb)

//Definimos embed para un <a:tada1:832234588242837535> | GANADOR :dor
const winner = new Discord.MessageEmbed()
			  .setFooter("🌷 · 3 en raya")
			  .setColor(0x00fffb)

			//este serÃ¡ el embed principal de juego
			const embedttt = new Discord.MessageEmbed()
			.setTitle("**"+ttt0.displayName+"** vs **"+ttt1.displayName+"**")
			.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" "))
			.setColor(0x00fffb);


			//AquÃ­ bÃ¡sicamente definimos un filtro para reconocer cada emoji exactamente, y un filtro que reconozca todos los emojis vÃ¡lidos para llevar el recuento y checkear si hay <a:tada1:832234588242837535> | GANADOR :dor
      const allF =  (reaction, user) => reaction.emoji.name === '1️⃣' || reaction.emoji.name === '2️⃣' || reaction.emoji.name === '3️⃣' || reaction.emoji.name === '4️⃣' || reaction.emoji.name === '5️⃣' ||reaction.emoji.name === '6️⃣' ||  reaction.emoji.name === '' ||  reaction.emoji.name === '8️⃣' || reaction.emoji.name === '9️⃣' && (user.id === ttt0.id || user.id === ttt1.id)
		  const arribaizquierdaF = (reaction, user) => reaction.emoji.name === '1️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
              const arribaF = (reaction, user) => reaction.emoji.name === '2️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
              const arribaderechaF = (reaction, user) => reaction.emoji.name === '3️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const abajoizquierdaF = (reaction, user) => reaction.emoji.name === '7️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
              const abajoF = (reaction, user) => reaction.emoji.name === '8️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const abajoderechaF = (reaction, user) => reaction.emoji.name === '9️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const derechaF = (reaction, user) => reaction.emoji.name === '6️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const izquierdaF = (reaction, user) => reaction.emoji.name === '4️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
			  const centroF = (reaction, user) => reaction.emoji.name === '5️⃣' && (user.id === ttt0.id || user.id === ttt1.id);
  
			  //AquÃ­ llevaremos los movimientos totales
			  var reactionUses = 0
			  
			  //AquÃ­ definimos el mensaje que vamos usar como tabla de juego
			  let msg = await message.channel.send(waiting)
			
			  //AquÃ­ reaccionamos al mensaje anterior con cada emoji, usamos await para que estas se hagan en orden, ya que estÃ¡n en un orden bastante mÃ¡s visible y sencillo de ver
				await msg.react("1️⃣")
				await msg.react("2️⃣")
				await msg.react("3️⃣")
				await msg.react("4️⃣")
				await msg.react("5️⃣")
				await msg.react("6️⃣")
				await msg.react("7️⃣")
				await msg.react("8️⃣")
				await msg.react("9️⃣")
				await msg.edit(embedttt)		

				//AquÃ­ definimos todos los collectores, usando los filtros definidos anteriormente
				const all = msg.createReactionCollector(allF, {time: 120000});
				const arribaizquierda = msg.createReactionCollector(arribaizquierdaF, {time: 120000});
				const arriba = msg.createReactionCollector(arribaF, {time: 120000});
				const abajoizquierda = msg.createReactionCollector(abajoizquierdaF, {time: 120000});
				const arribaderecha = msg.createReactionCollector(arribaderechaF, {time: 120000});
				const abajo = msg.createReactionCollector(abajoF, {time: 120000});
				const abajoderecha = msg.createReactionCollector(abajoderechaF, {time: 120000});
				const derecha = msg.createReactionCollector(derechaF, {time: 120000});
				const izquierda = msg.createReactionCollector(izquierdaF, {time: 120000});
				const centro = msg.createReactionCollector(centroF, {time: 120000});

				//A partir de aquÃ­, todos son colectores, iniciaremos todos a espera de reacciÃ³n, voy a tomar uno como ejemplo para explicarlo.
			
/*LINEA 1-0*/arribaizquierda.on("collect", async function(r) { //el mensaje que estÃ¡ justo antes de cada collector es una simple guÃ­a sobre donde irÃ¡ la ficha una vez se reaccione.
				if(turn === 0){ //Si turn es 0, significa que solo podrÃ¡ reaccionar el jugador 0
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return; //Por si el jugador 1 no respeta el turno, lo ignoraremos, bÃ¡sicamente extraemos las ids de los usuarios que reaccionaron, e inhabilitamos al jugador 1 y al bot
					line1.splice(0, 1, pish0) //AquÃ­, con la funcion de `array.slice` vamos reemplazando el valor de la ficha del jugador 0 en donde haya reaccionado
					turn++; //Sumamos 1 a turno para indicar que despues de este turno, le toca al jugador 1
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt1.displayName+"("+pish1+")"))//Editamos el mensaje, el cubo de juego y al jugador que le toca de tÃ­tulo, con su ficha correspondiente
					await r.remove(message.author) //Eliminaremos la reacciÃ³n despues de usarla para evitar confusiones
					//Y este if larguÃ­simo checkea si ha <a:tada1:832234588242837535> | GANADOR :do alguien
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt0.displayName)) && msg.reactions.removeAll();
		   
				} else if(turn === 1){//Si turn es 1, significa que solo podrÃ¡ reaccionar el jugador 1
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;//Por si el jugador 1 no respeta el turno, lo ignoraremos, bÃ¡sicamente extraemos las ids de los usuarios que reaccionaron, e inhabilitamos al jugador 1 y al bot
					line1.splice(0, 1, pish1)//AquÃ­, con la funcion de `array.slice` vamos reemplazando el valor de la ficha del jugador 0 en donde haya reaccionado
					turn--;//Restamos 1 a turno para indicar que despues de este turno, le toca al jugador 0
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt0.displayName+"("+pish0+")"))//Editamos el mensaje, el cubo de juego y al jugador que le toca de tÃ­tulo, con su ficha correspondiente
					await r.remove(message.author) //Eliminaremos la reacciÃ³n despues de usarla para evitar confusiones
					//Y este if larguÃ­simo checkea si ha <a:tada1:832234588242837535> | GANADOR :do alguien
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt1.displayName)) && msg.reactions.removeAll();
				}
			
			})

			//Y asÃ­ con todas
  
/*LINEA 1-1*/  arriba.on("collect", async function(r) {
				if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line1.splice(1, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt1.displayName+"("+pish1+")"))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line1.splice(1, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt0.displayName+"("+pish0+")"))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			  })
  
/*LINEA 3-0*/  abajoizquierda.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line3.splice(0, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt1.displayName+"("+pish1+")"))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line3.splice(0, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt0.displayName+"("+pish0+")"))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			})

/*LINEA 1-2*/  arribaderecha.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line1.splice(2, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt1.displayName+"("+pish1+")"))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt0.displayName)) && msg.reactions.removeAll();

				}else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line1.splice(2, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt0.displayName+"("+pish0+")"))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			}) 
  
/*LINEA 3-1*/abajo.on("collect", async function(r) {
				if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line3.splice(1, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt1.displayName+"("+pish1+")"))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line3.splice(1, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt0.displayName+"("+pish0+")"))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			})

/*LINEA 3-2*/abajoderecha.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line3.splice(2, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt1.displayName+"("+pish1+")"))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line3.splice(2, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt0.displayName+"("+pish0+")"))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			})

/*LINEA 2-2*/derecha.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line2.splice(2, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt1.displayName+"("+pish1+")"))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line2.splice(2, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt0.displayName+"("+pish0+")"))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt1.displayName)) && msg.reactions.removeAll();

				}
			})

/*LINEA 2-0*/izquierda.on("collect", async function(r) {
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line2.splice(0, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt1.displayName+"("+pish1+")"))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line2.splice(0, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt0.displayName+"("+pish0+")"))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt1.displayName)) && msg.reactions.removeAll();
					
				}
			})

/*LINEA 2-1*/centro.on("collect", async function(r) {
	             
                if(turn === 0){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt1.id))return;
					line2.splice(1, 1, pish0)
					turn++;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt1.displayName+"("+pish1+")"))
					await r.remove(message.author)
					if(line1[0] === pish0 && line1[1] === pish0 && line1[2] === pish0 || line2[0] === pish0 && line2[1] === pish0 && line2[2] === pish0 || line3[0] === pish0 && line3[1] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[0] === pish0 && line3[0] === pish0 || line1[1] === pish0 && line2[1] === pish0 && line3[1] === pish0 || line1[2] === pish0 && line2[2] === pish0 && line3[2] === pish0 || line1[0] === pish0 && line2[1] === pish0 && line3[2] === pish0 || line1[2] === pish0 && line2[1] === pish0 && line3[0] === pish0)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt0.displayName)) && msg.reactions.removeAll();

				} else if(turn === 1){
					if(r.users.cache.sort(m => m.bot === false).map(p => p.id).includes(ttt0.id))return;
					line2.splice(1, 1, pish1)
					turn--;
					msg.edit(embedttt.setDescription(line1.join(" ")+"\n"+line2.join(" ")+"\n"+line3.join(" ")).setTitle("Turno de  "+ttt0.displayName+"("+pish0+")"))
					await r.remove(message.author)
					if(line1[0] === pish1 && line1[1] === pish1 && line1[2] === pish1 || line2[0] === pish1 && line2[1] === pish1 && line2[2] === pish1 || line3[0] === pish1 && line3[1] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[0] === pish1 && line3[0] === pish1 || line1[1] === pish1 && line2[1] === pish1 && line3[1] === pish1 || line1[2] === pish1 && line2[2] === pish1 && line3[2] === pish1 || line1[0] === pish1 && line2[1] === pish1 && line3[2] === pish1 || line1[2] === pish1 && line2[1] === pish1 && line3[0] === pish1)return msg.edit(winner.setTitle("<a:tada1:832234588242837535> | GANADOR : "+ttt1.displayName)) && msg.reactions.removeAll();

				}	
			})	

			all.on("collect", async function(r) {
				reactionUses ++;
				msg.edit(embedttt.setFooter(reactionUses+"/9 movimientos"))
				if(reactionUses > 8)return msg.edit(winner.setTitle("EMPATE").setDescription("Acabaron los huecos para poner fichas"))

			})	
    }
}