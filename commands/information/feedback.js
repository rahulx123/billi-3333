const Discord = require('discord.js')
const { feedbackId } = require('../../data/feedbackid.json')

module.exports = {
    name: "feedback",
    description: "Advanced feedback command",

    async run (bot, message, args) {
        if(!args[0]) return message.reply('Please write something to send Feedback')

        message.reply(`✉️ | ${message.author.username}, Thanks for the Feedback :)`)

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}#${message.author.discriminator}`)
        .setDescription(`Feedback: ${args}`)
        .addField("On the server:", `${message.guild.name}`)
        .addField("Server ID:", `${message.guild.id}`)

        bot.channels.cache.get(feedbackId).send(embed)
    }

}