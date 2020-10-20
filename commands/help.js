const { prefix } = require('../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: 'help [command name]',
	execute(message, args) {
		const { commands } = message.client;
		if (!args.length) {
			message.channel.send(
				new Discord.MessageEmbed()
					.setTitle("Gifted Bot's command list")
					.setColor('#00aae8')
					.setThumbnail(message.client.user.displayAvatarURL({ format: 'png' }))
					.setFooter(
						`You can send ${prefix}help [command] to get info on a specific command!`
					)
					.setDescription(
						commands.map(
							cmd =>
								`\`${cmd.name}\` - ${cmd.description || '(No description)'}`
						)
					)
			);
			return;
		}

		const search = args[0].toLowerCase();
		const command = commands.find(
			c => c.name === search || (c.aliases || []).includes(search)
		);

		if (!command) {
			message.channel.send("That's not a valid command!");
			return;
		}

		const { name, description, aliases, usage } = command;
		const embed = new Discord.MessageEmbed()
			.setTitle(`Command: \`${name}\``)
			.setDescription(description)
			.addField('Usage:', `\`\`\`${prefix}${usage || name}\`\`\``, false)
			.setColor('#00aae8');

		if (aliases)
			embed.addField(
				'Aliases:',
				aliases.map(alias => `\`${alias}\``).join(', '),
				false
			);

		message.channel.send(embed);
	},
};
