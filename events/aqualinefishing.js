module.exports = (client, message) => {
  if (message.channel.id === `757268102193873027` && message.author.id != '545292962821570560') {
  	message.channel.bulkDelete(1, true);
  }
}
