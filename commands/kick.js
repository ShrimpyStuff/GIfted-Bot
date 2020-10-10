module.exports = {
	name: 'kick',
	description: 'Kick Members',
	execute(message, args) {
			if (!message.content.startsWith('!')) return;
    if (message.channel.type == "dm") return;
    const member = message.mentions.members.first()
    if (message.member.hasPermission('KICK_MEMBERS')) {
    if (!member) {
      return message.reply(`Who are you trying to kick? You must mention a user.`)
    }
    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`)
    }
    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  }
	},
};
