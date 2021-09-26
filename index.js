const Discord = require('discord.js');

const bot = new Discord.Client();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://coffee:youtube@bot.lhpo4.mongodb.net/Data', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(console.log('Connected to Mongoose'))

const { token } = require('./config.json');
const { prefix } = require('./config.json')

const { readdirSync, read } = require('fs');
const ms = require('ms');

const { join } = require('path');

const Levels = require('discord-xp');

Levels.setURL("mongodb+srv://coffee:youtube@bot.lhpo4.mongodb.net/Data")

bot.commands = new Discord.Collection();
const commandFolders = readdirSync('./commands');
const Timeout = new Discord.Collection()

bot.prefix = ('billi');

//this is the prefix for BILLI MUSIC


for (const folder of commandFolders) {
    const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`)
        bot.commands.set(command.name, command);
    }
}

bot.on("error", console.error);


const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}

bot.on('error', console.error);

bot.on('ready', () => {
    console.log(`${bot.user.tag} is ready to ROCK`);
    const arrayOfStatus = [
        `Over ${bot.guilds.cache.size} servers!`,
        `Prefix is: billi`,
        `Use billi help`,
        `Owner of the bot is Akash`,
        `Subscribe to Gilasa Gaming`,
        `Subscribe to ミカアミ Mikami`,
        `This Bot is in Beta version`,
        `Do you know? the prefix is billi`,
        `Subscribe to PEWDIEPIE`,
        `CHARLIE DAMELIO IS CRINGE`,
        `DONT DO VEGETABLES`,
        `DRUGS`,
        `I love to eat racoons`,
        `BABY SHARK DODODODODODODO`,
        `MOMMY SHARK DODODODODO`,
        `Why am i a bot`,
        `i should be a cat not a cat`,
        `Do you remember Gta sanandreas?`,
        `AH shit here we go again`,
        `Umm? Minecraft Time?`,
        `Bot Maybe Finished till 22nd October`,
        `Hold up Many features are coming`,
        `Dont watch Porn`
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        //console.log(status);
        bot.user.setActivity(status, { type: "LISTENING" }).catch(console.error)
        index++;
    }, 5000)
})

bot.on('message', async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    //Levels
    const randomAmountOfXp = Math.floor(Math.random() * 29) + 1;
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`${message.author}, congratulations! you just leveled up to **${user.level}**!`);
    }


    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const commandName = args.shift().toLowerCase();

    const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if( command ) {
            if(command.cooldown) {
                if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`Please wait \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long: true})}\` Before using this command again!`);
                command.run(bot, message, args)
                Timeout.set(`${command.name}${message.author.id}`, Date.now () + command.cooldown)
                .setTimeout(() => {
                    Timeout.delete(`${command.name}${message.author.id}`)
                }, command.cooldown)
            } else command.run(bot,message, args);
        }


       
    }
})




bot.on('guildCreate', (guild) => {
    let channeltoSend;
    guild.channels.cache.forEach((channel) => {
        if (
            channel.type === "text" &&
            !channeltoSend &&
            channel.permissionsFor(guild.me).has("SEND_MESSAGES")
        ) channeltoSend = channel;
    });
    if(!channeltoSend) return;

    let channelEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor('Hello! Thank you for inviting me!!')
    .setDescription("Prefix is billi btw!")
    .addField("need help", "Take a look at my [Owner Youtube](https://www.youtube.com/channel/UC2P8KBTixZMVojWVX31ZRzA)!")

    channeltoSend.send(channelEmbed).catch(e => {
        if (e) {
            return;
        }
    })
})

const distube = require('distube')
bot.distube = new distube(bot, { searchSongs: false, emitNewSongOnly: true })
bot.distube
.on('playSong', (message, queue, song) => message.channel.send(
    `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by : ${song.user}`, 
))
.on(`addSong`, (message, queue, song) => message.channel.send(
    `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
))
.on('error', (message, e) => {
    //console.error(e)
    message.channel.send(`An error encountered ${e}`)
})

const WelcomeSchema = require('./schema/welcome-schema');
const { has } = require('mongoose/lib/helpers/populate/leanPopulateMap');

bot.on('guildMemberAdd', async (member, guild) => {
    WelcomeSchema.findOne({ guildId: member.guild.id }, async (err, data) => {
        if(!data) return;

        const user = member.user;
        const channel = member.guild.channels.cache.get(data.channelId);
        const welcomemsg = data.welcomeMsg

        channel.send(`${user}!,` + welcomemsg)


    })
})

///----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const coinSchema = require('./schema/coins');
bot.bal = (userId) => new Promise(async ful => {
    const data = await coinSchema.findOne({ userId });
    if(!data) return ful(0);
    ful(data.coins);
})
//COINSSSSSSS
bot.add = (userId, coins) => {
    coinSchema.findOne({ userId }), async (err, data) => {
        if(err) throw err;
        if(data) {
            data.coins += coins;

        } else {
            data = new coinSchema({
                userId,
                coins
            })

        }
        data.save(); 
    }
}


bot.remove = (userId, coins) => {
    coinSchema.findOne({ userId }, async (err, data) => {
        if(err) throw err;
        if(data) {
            data.coins -= coins;

        } else {
            data = new coinSchema({
                userId,
                coins: -coins
            })

        }
        data.save()
    })
} 

bot.on('guildMemberAdd', async (member) => {
    console.log(member.user.tag);
})

bot.login(token);
