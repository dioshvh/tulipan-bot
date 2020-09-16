module.exports = {
    name: "fortnite",
    category: "<:logonc:750704904972140598> ▸ informativos ",
    description: "Manda la tienda diaria de Fortnite",
    run: async (client, message, args) => {
    let itemshop = `https://ctk-api.herokuapp.com/fortnite-shop`
    message.channel.send(itemshop);
}
}