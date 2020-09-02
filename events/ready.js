module.exports = client => {
  console.log(`Logged in as ${client.user.tag} and I'm ready to roll!`);
client.user.setActivity('you and (๑• .̫ •๑)', { type: 'WATCHING' });
}
