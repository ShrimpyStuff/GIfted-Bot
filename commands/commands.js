module.exports = {
	name: 'commands',
	description: 'Commands',
	execute(message, args) {
			if (!message.content.startsWith('!')) return;
    message.channel.send('Commands at https://docs.google.com/document/d/1zaGQDYOkRH3JGtAeK1QVbFnwh8NdDQlH85V6IqHTbug/edit?usp=sharing');
  },
};
