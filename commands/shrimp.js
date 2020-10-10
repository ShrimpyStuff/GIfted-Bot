module.exports = {
	name: 'shrimp',
	description: 'Shrimp Emoji',
	execute(message, args) {
			if (!message.content.startsWith('!')) return;
    message.channel.send('<:customshrimp:737760014244249738>');
  },
};
