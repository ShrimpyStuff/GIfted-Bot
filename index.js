const { prefix, token, ownerID, config } = require('./config.json');
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

fs.readdir("./events/", (err, files) => {
	files.forEach(file => {
		const eventHandler = require(`./events/${file}`);
		const eventName = file.split(".")[0];
		client.on(eventName, (...args) => eventHandler(client, ...args));
	});
});

client.on("message", message => {

			if (message.author.bot || message.channel.type == "dm") return;

			const args = message.content.slice(prefix.length).trim().split(/ +/);
			const command = args.shift().toLowerCase();

			if (message.content === "16") {
				message.channel.send("16 is the best number!!! and you can't do anything to change that.");
			}
			if (message.channel.id === `757268102193873027` && message.author.id != '545292962821570560') {
				message.delete();
			}
			if (message.mentions.has(client.user)) {
				return message.channel.send('Hi ${message.author.username}! `My prefix is !`');
			}
			if (message.author.id === ownerID) {
				switch (message.content.toUpperCase()) {
					case '!RESET':
						resetBot(message.channel);
						break;


				}
			}
			message.guild.members.fetch().then(fetchedMembers => {
				if (message.content === prefix + `server`) {
					const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
					const totalIdle = fetchedMembers.filter(member => member.presence.status === 'idle');
					const totalDnd = fetchedMembers.filter(member => member.presence.status === 'dnd');
					const totalAllOnline = totalDnd.filter(member => !member.user.bot).size + totalIdle.filter(member => !member.user.bot).size + totalOnline.filter(member => !member.user.bot).size;
					const RealMembers = message.guild.members.cache.filter(member => !member.user.bot).size;
					message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nOnline members: ${totalAllOnline}\nReal Members: ${RealMembers}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`);
					console.log(`${message.author.username} used !server`);
				}
				if (!client.commands.has(command)) return;
});
});
				/*try {
					client.commands.get(command).execute(message, args);
				} catch (error) {
					console.error(error);
					message.reply('there was an error trying to execute that command!');
				}
				for (const file of commandFiles) {
					const command = require(`./commands/${file}`);

					client.commands.set(command.name, command);
				}
			});*/

			function resetBot(channel) {
				channel.send('Resetting...')
					.then(msg => client.destroy())
					.then(() => client.login(token))
					.then(msg => channel.send('Done'));
			}
			client.login(token);
