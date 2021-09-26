const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    description: "meme command which send random memes lol",

    async run(bot, message, args) {
        const  subReddits = ["dankmeme", "meme", "memes", "MEME",]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed= new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Your **meme** has been fucked here. All the way from r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
    }
}