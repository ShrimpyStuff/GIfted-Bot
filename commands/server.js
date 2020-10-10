module.exports = {
	name: 'server',
	description: 'Server info',
	execute(message, args) {
    message.guild.members.fetch().then(fetchedMembers => {
        const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
        const totalIdle = fetchedMembers.filter(member => member.presence.status === 'idle');
        const totalDnd = fetchedMembers.filter(member => member.presence.status === 'dnd');
        const totalAllOnline = totalDnd.filter(member => !member.user.bot).size + totalIdle.filter(member => !member.user.bot).size + totalOnline.filter(member => !member.user.bot).size;
        const RealMembers = message.guild.members.cache.filter(member => !member.user.bot).size;
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nOnline members: ${totalAllOnline}\nReal Members: ${RealMembers}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`);
        console.log(`${message.author.username} used !server`);
      });
	},
};
