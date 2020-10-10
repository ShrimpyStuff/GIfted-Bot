module.exports = {
	name: 'code',
  aliases: ['github'],
	description: 'Code',
	execute(message, args) {
			if (!message.content.startsWith('!')) return;
    message.channel.send(`https://github.com/ShrimpyStuff/Gifted-Bot/`);
  },
};
