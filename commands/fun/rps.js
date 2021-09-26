const Discord = require('discord.js')

module.exports = {
    name: "rps",
    description: "rock paper scissor",

        async run (bot, message, args) {
            let embed = new Discord.MessageEmbed()
            .setTitle("Rock Paper Scissor")
            .setDescription("React to play!")
            .setTimestamp()
            let msg = await message.channel.send(embed)
            await msg.react("👊🏻")
            await msg.react("✌🏻")
            await msg.react("🖐🏻")

            const filter = (reaction, user) => {
                return ['👊🏻', '✌🏻', '🖐🏻'].includes(reaction.emoji.name) && user.id === message.author.id;
            }

            const choices = ['👊🏻', '✌🏻', '🖐🏻']
            const me = choices[Math.floor(Math.random() * choices.length)]
            msg.awaitReactions(filter, {max: 1, time: 60000, error: ["time"]}).then(
                async(collected) => {
                    const reaction = collected.first()
                    let result = new Discord.MessageEmbed()
                    .setTitle("Result")
                    .addField("Your Choice", `${reaction.emoji.name}`)
                    .addField("Bots Choice", `${me}`)
                    await msg.edit(result)

                    if((me === "👊🏻" && reaction.emoji.name === "✌🏻") ||
                    (me === "✌🏻" && reaction.emoji.name === "🖐🏻")
                    (me === "🖐🏻" && reaction.emoji.name === "👊🏻")) {
                        message.reply("You Lost! | noobde");
                    } else if (me === reaction.emoji.name) {
                        return message.reply("Its a Draw| firse try karo")
                    } else {
                        return message.reply("You won!");
                    }
                })
                .catch(collected => {
                    message.reply('');
                })
        }
}