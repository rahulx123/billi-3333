module.exports = {
    name: 'bug',
    description: 'Feed back a bug',

    async run (bot, message, args) {
        if(!args[0]) return message.reply('Please specify a bug')
        
        message.reply(`✉️ | ${message.author.username}, Thanks for finding the bug! Maybe raspberry will fix it as soon as possible.`)

        console.log('Bug: ' + `(username)` + message.author.username, '#'+ message.author.discriminator, `[UserId]`+ message.author.id, `(serverName)`+ message.guild.name, `(serverid)`+ message.guild.id)
    }
}