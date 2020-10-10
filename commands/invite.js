module.exports = {
	name: 'invite',
	description: 'Invite Link',
	execute(message, args) {
			if (!message.content.startsWith('!')) return;
    message.channel.send('Invite me at https://shrimpystuff.github.io/Gifted-Site/');
  },
};
