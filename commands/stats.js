module.exports = {
	name: 'stats',
	description: 'Bot Stats',
	execute(message, args) {
    				message.channel.send(`Servers: ${message.client.guilds.cache.size}`);
					},
};
