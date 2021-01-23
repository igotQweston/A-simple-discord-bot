'use strict';

const {Client, MessageEmbed} = require('discord.js');
const client = new Client();
const token = require('./token.json')
const id = require('./ID.json')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var log =' '

client.on('message', msg => {
  if(msg.author.id!="778133865477701654") {
    console.log(msg.author.tag,',',msg.channel.name,',',msg.createdAt,',',msg.content)
    console.log(msg.channel)
    var logs = msg.author.tag.concat(' , ',msg.channel,' , ',msg.createdAt,' , ',msg.content)
    log = new MessageEmbed()
        .setTitle('Log')
        .setColor(0xff0000)
        .setDescription(logs);  
    client.users.fetch(id).then((user) => {
        user.send(log)
  })}

  if (msg.content === 'db help') {
    const embed = new MessageEmbed()
        .setTitle('Why??')
        .setColor(0xff0000)
        .setDescription("Why are you asking help? I don't have any cool features because the guy who made me is lazy. Maybe in the future he will add a cool feature. For now just don't ask me for help.");
    msg.channel.send(embed);
}})

,client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
  
})

,client.login(token)