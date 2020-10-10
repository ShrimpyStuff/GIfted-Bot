module.exports = {
	name: 'wumpus',
	description: 'Wumpus Emoji',
	execute(message, args) {
			if (!message.content.startsWith('!')) return;
    message.channel.send('<:wumpus:737758356210712646>');
  },
};
