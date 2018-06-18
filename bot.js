const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});

client.on('message', message => {
     if (message.content === "رابط") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")



 client.on('message', message => {
     if (message.content === "رابط") {
message.author.send("***WELCOME TO ZOMBIE***" + `  **

https://discord.gg/2UJV6Hp

**`);
    }
});          


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
