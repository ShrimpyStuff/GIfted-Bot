module.exports = {
	name: 'emojis',
	description: 'Emojis',
	execute(message, args) {
			if (!message.content.startsWith('!')) return;
    	message.channel.send('<:wumpus:737758356210712646> <a:Wizard:737758521776537712> <:customshrimp:737760014244249738>');
  },
};
