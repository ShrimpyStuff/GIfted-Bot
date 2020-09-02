const kick = require("../commands/kick")
const help = require("../commands/commands")
module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message)
  }
  if (message.content.startsWith("!help")) {
    return help(message)
  }
 if (message.content.startsWith("!commands")) {
    return help(message)
  }
} 
