const pagination = require('discord.js-pagination')
const Discord = require('discord.js')

module.exports = {
    name: "helpinfo",
    aliases: ['hi'],
    description: "More advance, help command",

    async run (bot, message, args) {

        const rahul = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('Setup')
        .addField('`billi setwelcome`', 'Sets Welcome Channel')
        .addField('`billi setprefix`', 'Sets Prefix of the current server')

        const BotInfo = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('Prefix : `billi`')
        .addField('**Pages**', '`1.Bot Information`, `2.Information`, `3.Fun`, `4.Filters`')
        .addField('**Navigation Help**', 'Use the arrow to look through the pages!')

        const Information = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('Information')
        .addField('`billi ping`', 'Shows you the bots ping!')
        .addField('`billi weather`', 'Shows the weather of anyplace')
        .addField('`billi help`', 'Shows available command of Billi Music')
        .addField('`billi helpinfo`', 'More advance form of help command')
        .addField('`billi botinfo`', 'Shows infos about Billi')
        .addField('`billi bug`', 'More reliable way to contact with raspberry to send bugs :)')
        .addField('`billi feedback`', 'Send Feedback of Billi Music 😃')

        const fun = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle('Fun')
        .addField('`billi rank', 'Shows your current level and rank')
        .addField('`billi poll`', 'Creates a poll')
        .addField('`billi 8ball`', 'Ask any question and billi will respond!!')
        .addField('`billi howgay`','Tells you how gay someone is 🥺' )
        .addField('`billi meme`', 'Sends a random meme from random Meme reddits!')
        .addField('`billi rps`', 'Play rock paper scissors, against Billi')

        

        ///const filter = new Discord.MessageEmbed()
       /// .setColor("RANDOM")
        ///.setTitle('**Filter**')
        ///.addField('`bassboost`', 'billi filter bassboost')
        ///.addField('`8D`', 'billi filter 8D')
        ///.addField('`vaporwave`', 'billi filter vaporwave')
        //.addField('`nightcore`', 'billi filter nightcore')
        //.addField('`phaser`', 'billi filter phaser')
        //.addField('`tremolo`', 'billi filter tremolo')
        //.addField('`vibrato`', 'billi filter vibrato')
        //.addField('`surrounding`', 'billi filter surrounding')
        //.addField('`pulsator`', 'billi filter pulsator')
        //.addField('`subboost`', 'billi filter subboost')
        //.addField('`chorus`', 'billi filter chorus')
        //.addField('`karaoke`', 'billi filter karaoke')
        //.addField('`sofa`', 'billi filter sofa')
        //.addField('`desilencer`', 'billi filter desilencer')
        //.addField('`billi filter clear`', 'Clears filter')


        const pages = [
            BotInfo,
            rahul,
            Information,
            fun,
            //filter,
        ]

        const emojilist = ["⏪", "⏭"]

        const timeout = '600000';

        pagination(message, pages, emojilist, timeout)
    }
}