'use strict';

const {Client, MessageEmbed} = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(msg.author,',',msg.content)
  if (msg.content === 'db help') {
    const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Why??')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription("Why are you asking help? I don't have any cool features because the guy who made me is lazy. Maybe in the future he will add a cool feature. For now just don't ask me for help.");
    // Send the embed to the same channel as the message
    msg.channel.send(embed);
}}

,client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
  
})

,client.login(Give the token here))