const Discord = require('discord.js')

module.exports = {
    name: "help",
    aliases: ['h'],
    description: "help",

    async run (bot, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Prefix- `billi`')
        .setAuthor('Command list', message.author.displayAvatarURL())

        .addFields({
            name: '**About this Bot**',
            value: '`Billi Music Loves Honey Singh`',

        },
        {
            name: '**Setup**',
            value: '|`setwelcome`|'
        },
        {
            name: '**Information**',
            value: '|`invite`|`uptime`|`ping`|`weather`|`bug`|`feedback`|`help`|`helpinfo`|',
        },
        {
            name: '**Music**',
            value: '`Coming on 8:00 PM`',
        },
        
        {
            name: '**Filters**',
            value: '`Coming on 8:00 PM`'
            ///value: '|` bassboost `|` 8D `|` vaporwave `|` nightcore `|`  phaser `|` tremolo `|` vibrato `|` surrounding `|` pulsator `|` subboost `|` chorus `|` karaoke `|` sofa `|` desilencer `|` clear `|'
        },
        {
            name: `**Fun**`,
            value: '|` rank `| `poll` | `8ball` | `howgay` | `meme` | `rps` |',
        },)

        message.channel.send(help)
    }
}