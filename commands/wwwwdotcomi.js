module.exports = {
	name: 'wwwwdotcomi',
	description: 'wwwwdotcom invite',
	execute(message, args) {
		if (!message.content.startsWith('!')) return;
    message.channel.send(`https://tinyurl.com/WWWWDOTCOM1`);
  },
};
