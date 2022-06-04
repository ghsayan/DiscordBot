const Discord = require('discord.js');
const {
    prefix
} = require('./config.json');
const client = new Discord.Client();

var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(process.env.giphykey)

client.once('ready', () => {
    console.log('Bot is Online!');
})

//welcome message
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'chill-zone' || channel.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });

//set custom nickname on join
client.on('guildMemberAdd', (member) => {
 if (member.user.username.startsWith('D')) {
  member.setNickname('Dogi Kumari');
 }
});

//commands
client.on('message', message => {
    if (message.content.startsWith(`${prefix}wish`) && !message.author.bot) {
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
    if (message.content.startsWith(`${prefix}pls`) && !message.author.bot) {
        const args = message.content.slice(5).split(' ');
        const command = args.shift().toLowerCase();
        console.log(command);

        giphy.search('gifs',{"q":command})
            .then((response) =>{
                var totalResponses=response.data.length;
                var responseIndex=Math.floor((Math.random()*10)+1)%totalResponses;
                var responseFinal=response.data[responseIndex];

                let member = message.mentions.members.first();
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`${message.author.username} ${command}s ${member.displayName}`)
                    .setImage(responseFinal.images.fixed_height.url)
                message.channel.send(exampleEmbed);                
            }).catch(()=>{
                message.channel.send("GIF not found");
            })
    }
});
client.login(process.env.token);
