module.exports = {
    name: "ping",
    category: "<:logonc:750704904972140598> ▸ informativos ",
    description: "Devuelve la latencia en un Ping (ms)",
    run: async (client, message, args) => {
		let ping = Math.floor(message.client.ws.ping);
		message.channel.send('<a:8527_discord_loading:732957843501875300> `' +ping +' ms.` desde su servidor.');
  }
  }