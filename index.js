const Discord = require('discord.js');
const {
    prefix
} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is Online!');
})

client.on('message', message => {
    if (message.content.startsWith(`${prefix}greet`) && !message.author.bot) {
        let member = message.mentions.members.first();
        message.channel.send(`Hello ${member.displayName}!`);
    }
    if (message.content.startsWith(`${prefix}angelbully`) && !message.author.bot) {
        let member = message.mentions.members.first();
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Angel bullies ${member.displayName}`)
            .setImage('https://media.giphy.com/media/jxETRYAi2KReel7pqy/giphy.gif')
        message.channel.send(exampleEmbed);
    }
});
client.login(process.env.token);