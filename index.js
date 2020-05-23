const Discord = require('discord.js');
const {
    prefix
} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    let member = message.mentions.members.first();
    message.channel.send(`Hello ${member.displayName}!`);

});
client.login(process.env.token);