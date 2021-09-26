const { bot, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`./config.json`);

module.exports = {
  name: `uptime`,
  description: `Gives you the uptime of the Bot`,
  aliases: ['up'],
  edesc: "With that you can see how long the Bot has been running nonstop",
  async run (bot, message, args) {
    const days = Math.floor(bot.uptime / 86400000);
    const hours = Math.floor(bot.uptime / 3600000) % 24;
    const minutes = Math.floor(bot.uptime / 60000) % 60;
    const seconds = Math.floor(bot.uptime / 1000) % 60;
    //react with approve emoji
    message.react("✅");
    message.channel.send(new MessageEmbed().setColor("#F0EAD6").setTitle(`***Billi's Uptime:***\n\n\`${days}d\` \`${hours}h\` \`${minutes}m\` \`${seconds}s\n\``));


  }
}