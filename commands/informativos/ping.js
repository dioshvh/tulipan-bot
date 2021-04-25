module.exports = {
    name: "ping",
    category: "<:dash_logo:832271934775361606> informativos ",
    description: "Devuelve la latencia en un Ping (ms)",
    run: async (client, message, args) => {
		let ping = Math.floor(message.client.ws.ping);
		message.channel.send('<a:discord_loading:832264650589470741> `' +ping +' ms.` desde su servidor.');
  }
  }