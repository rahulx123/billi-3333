const Discord = require('discord.js');

module.exports = {
    name: "simjoin",
    description: 'simulates a join!',

    async run (bot, message, args) {
        if(message.author.id != '768441096887730177') return;
        bot.emit('guildMemberAdd', message.member);
    },
}