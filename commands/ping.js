module.exports = {
	name: 'ping',
	description: 'Ping',
	execute(message, args) {
		if (!message.content.startsWith('!')) return;
    message.reply(`Pong! Your ping is ${Date.now() - message.createdTimestamp} ms`);
  },
};
