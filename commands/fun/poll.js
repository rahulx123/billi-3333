const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "poll",
    description: "starts a poll",

    async run (bot, message, args) {
        let channelId = message.mentions.channels.first()
        let theDescription = args.slice(1).join(" ")

        if(!channelId) return message.reply("Please specify a channel you want the poll to be in")
        if(!theDescription) return message.reply("Please specify a description/question for the poll")

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("POLL TIME")
        .setDescription(theDescription)
        .setFooter("Poll started by: "+ message.author.username +'#'+ message.author.discriminator)

        let msgEmbed = await channelId.send(embed)
        await msgEmbed.react('✅')
        await msgEmbed.react('❌')
    }
}
