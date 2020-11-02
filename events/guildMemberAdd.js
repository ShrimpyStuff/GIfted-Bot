module.exports = (client, channel, member, guild) => {
  member.send(`Welcome to ${guild.name}, ${member}!`)
}
