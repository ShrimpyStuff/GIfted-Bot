module.exports = {
	name: 'stats',
	description: 'Bot Stats',
	execute(message, args) {
			if (!message.content.startsWith('!')) return;
    				message.channel.send(`Servers: ${message.client.guilds.cache.size}`);
					},
};
