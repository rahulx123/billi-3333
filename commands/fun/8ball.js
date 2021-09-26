const Discord = require('discord.js')

module.exports = {
    name: "8ball",
    aliases: ['8b', '8bll'],
    cooldown: 1000 * 5,
    description: "8ball command",

    async run (bot, message, args) {
        if(!args[0]) return message.reply('Please ask a full question!')
        let replies = ["yes.", "Outlook seems good.", "yus", "of course.", "yes - Definetlely", "No", "Better not tell you now"]
        
        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor("#1C1C1C")
        .addField("Question", question)
        .addField("Answer", replies[result])

        message.channel.send(ballembed)
    }
}