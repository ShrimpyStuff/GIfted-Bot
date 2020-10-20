module.exports = {
	name: 'avatar',
	description: 'Shows users avatar',
  aliases: ['pfp', 'icon'],
	usage: 'avatar [member]',
	execute(message, args) {
		const Discord = require('discord.js');

		if (!message.mentions.users.size) {
			const yourAvatar = new Discord.MessageEmbed()
	.setColor('#00aae8')
	.setTitle('Your avatar')
	.setImage(`${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`)

message.channel.send(yourAvatar);
		}

		const avatarList = message.mentions.users.map(user => {
				const mentionAvatar = new Discord.MessageEmbed()
		.setColor('#00aae8')
		.setTitle(`${user.username}'s avatar`)
		.setImage(`${user.displayAvatarURL({ dynamic: true, size: 256 })}`)

	message.channel.send(mentionAvatar);
		});
	},
};
