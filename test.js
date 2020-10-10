const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, ownerID, config } = require('./config.json');
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

client.on('message', message => {

  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (message.content === "16") {
		message.channel.send("16 is the best number!!! and you can't do anything to change that.");
	}

if (!client.commands.has(commandName)) return;
const command = client.commands.get(commandName);

try {
	command.execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
});

client.login(token);