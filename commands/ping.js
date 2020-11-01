module.exports = {
	name: 'ping',
	description: 'Ping',
	execute(message, args) {
    message.channel.send("Pinging...").then(m =>{
              const ping = (m.createdTimestamp - message.createdTimestamp) * 2;
  
              const embed = new Discord.MessageEmbed()
              .setAuthor(`Pong, Your ping is ${ping}ms`)
              .setColor("#00aae8")
              
              m.edit(embed)
          });
  },
};
