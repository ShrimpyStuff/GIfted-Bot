module.exports = {
	name: 'ping',
	description: 'Ping',
	execute(message, args) {
    message.reply(`Pong! Your ping is ${Date.now() - message.createdTimestamp} ms`);
  },
};
