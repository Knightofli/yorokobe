const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
    msg.reply('Pong!');
}
});

bot.login(process.env.TOKEN);
