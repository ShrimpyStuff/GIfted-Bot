module.exports = message => {
if (message.content === prefix + "ping") {
  message.reply(`Pong! Your ping is ${Date.now() - message.createdTimestamp} ms`);
}
}
