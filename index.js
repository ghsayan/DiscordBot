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
});
client.login(process.env.token);