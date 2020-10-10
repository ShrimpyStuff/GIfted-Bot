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
			if (message.content === prefix + "wizards") {
				message.channel.send('<a:Wizard:737758521776537712> <a:Wizard:737758521776537712>');
				console.log(`${message.author.username} used !wizards`);
			}
			if (message.content === prefix + "wumpus") {
				message.channel.send('<:wumpus:737758356210712646>');
				console.log(`${message.author.username} used !wumpus`);
			}
			if (message.content === prefix + "emojis") {
				message.channel.send('<:wumpus:737758356210712646> <a:Wizard:737758521776537712> <:customshrimp:737760014244249738>');
				console.log(`${message.author.username} used !emojis`);
			}
			if (message.content === prefix + `stats`) {
				message.channel.send(`Servers: ${message.client.guilds.cache.size}`);
				console.log(`${message.author.username} used !stats`);
			}
			if (message.content === prefix + `WWWWDOTCOMI`) {
				message.channel.send(`https://tinyurl.com/WWWWDOTCOM1`);
				console.log(`${message.author.username} used !WWWWDOTCOMI`);
			}
			if (message.content === prefix + `ShrimpyStuff`) {
				message.channel.send(`https://shrimpystuff.github.io/Home/`);
				console.log(`${message.author.username} used !ShrimpyStuff`);
			}
			if (message.channel.id === `757268102193873027` && message.author.id != '545292962821570560') {
				message.delete();
			}
			if (message.content === prefix + `Github` || message.content === prefix + `code`) {
				message.channel.send(`https://github.com/ShrimpyStuff/Gifted-Bot/`);
				console.log(`${message.author.username} used !Github or !code`);
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
