const Discord = require('discord.js')

module.exports = {
    name: "ping", //command name for billi
    description: "Ping dikhayega loude",

    async run (bot, message, args) {

        const ping = new Discord.MessageEmbed()
        .setDescription(`🥺 Ping:\** ${bot.ws.ping}ms **`);

        message.channel.send(ping)
    }
}