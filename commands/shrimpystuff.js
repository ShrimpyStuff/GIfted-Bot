module.exports = {
	name: 'shrimpystuff',
	description: 'My main webpage',
	execute(message, args) {
			if (!message.content.startsWith('!')) return;
    message.channel.send(`https://shrimpystuff.github.io/Home/`);
  },
};
