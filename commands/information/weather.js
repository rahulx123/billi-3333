const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "weather",
    description: "shows the weather",

    async run (bot, message, args) {
        weather.find({search: args.join(" "), degreeType: `C`}, function (error, result) {
            if(error) return message.channel.send('Please specify a location LOL')

            if (result === undefined || result.length === 0)('**invalid** location!!')

            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.MessageEmbed()
            .setColor(0*1111111)
            .setAuthor(`Weather forcast for ${current.observationpoint}`)
            .setDescription(`**${current.skytext}**`)
            .addField('TimeZone', `UTC ${location.timezone}`, true)
            .addField(`Degree Type`, 'Celcius', true)
            .addField('Temperature', `${current.temperature}°`, true)
            .addField('Wind', `${current.winddisplay}`, true)
            .addField('Feels like', `${current.feelslike}°`, true)
            .addField('Humidity', `${current.humidity}%`, true)

            message.channel.send(embed)
            
        })
    }
}