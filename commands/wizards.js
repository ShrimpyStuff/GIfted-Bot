module.exports = {
	name: 'wizards',
	description: 'Wizard Emojis',
	execute(message, args) {
			if (!message.content.startsWith('!')) return;
    message.channel.send('<a:Wizard:737758521776537712> <a:Wizard:737758521776537712>');
  },
};
