const pagination = require('discord.js-pagination')
const Discord = require('discord.js')

module.exports = {
    name: "botinfo",
    aliases: ['bi'],
    description: "More advance,     Bot info command",

    async run (bot, message, args) {

        const BotInfo = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('**Prefix** : `billi`')
        .addField('**Pages**', '`1.Information`, `2.How was it created`, `3.Who is the owner of the bot?`')
        .addField('**Navigation Help**', 'Use the arrow to look through the pages!')

        const Information = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('Information')
        .addField('`node version`', 'v14.17.6')
        .addField('`Developer`', 'raspberry')
        .addField('`Hosted on?`', 'Nightrow')
        .addField('`Billi Version`', 'v1.1.0')
        .addField('`Features`', 'many commands')
        .addField('`Updates?`', 'will be always updated 😃')

        const fun = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('How was it created?')
        .addField('`raspberry`', 'I have a private Hosting company, which is called ***Nightrow hosting*** where my friends bots are hosted, during i was learning code i came to meet with a youtuber ***MST Gaming***. and found a new friend when i was moderator there which is the current Owner of Billi Music. His name is Akash and he came to know about my Hosting comapany. And begged me for making a custom Bot🤣. and yah i did. so this is the story of how Billi Music was born')
        


        const pages = [
            BotInfo,
            Information,
            fun,
        ]

        const emojilist = ["⏪", "⏭"]

        const timeout = '600000';

        pagination(message, pages, emojilist, timeout)
    }
}