const Discord = require('discord.js');
const Levels = require('discord-xp');
const canvacord = require('canvacord');

module.exports = {
    name: 'level',
    aliases: ['lvl', 'rank'],
    description: "Shows level",

    async run (bot, message,args) {
        const target = message.mentions.users.first() || message.author;

        const user = await Levels.fetch(target.id, message.guild.id);


        if (!user) return message.channel.send("Seems like this user hasnt earned any xp till now");

        const neededXp = Levels.xpFor(parseInt(user.level) + 1)

        const img = "https://i.imgur.com/8oAzl0j.png";


        const rank = new canvacord.Rank()
        .setAvatar(target.displayAvatarURL({ dynamic: false, format: 'png' }))
        .setBackground("IMAGE", img)
        .setLevel(user.level)
        .setCurrentXP(user.xp)
        .setRequiredXP(neededXp)
        .setStatus("idle")
        .setProgressBar("#FFFFFF", "COLOR")
        .setUsername(target.username)
        .setDiscriminator(target.discriminator);

        rank.build()
        .then(data => {
            const attachment = new Discord.MessageAttachment(data, "RankCard.png");
            message.channel.send(attachment);
        });
    }
}
