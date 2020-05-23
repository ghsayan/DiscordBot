const Discord = require('discord.js');
const {
    prefix
} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is Online!');
})

//welcome message
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'chill-zone' || channel.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });

//commands
client.on('message', message => {
    if (message.content.startsWith(`${prefix}greet`) && !message.author.bot) {
        let member = message.mentions.members.first();
        message.channel.send(`Hello ${member.displayName}!`);
    }
    if (message.content.startsWith(`${prefix}bully`) && !message.author.bot) {
        let member = message.mentions.members.first();
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username} bullies ${member.displayName} :punch: `)
            .setImage('https://media.giphy.com/media/jxETRYAi2KReel7pqy/giphy.gif')
        message.channel.send(exampleEmbed);
    }
});
client.login(process.env.token);