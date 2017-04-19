const { COMMANDS } = require('../constants');

module.exports = function parseCommandName(rawCommandName) {
  if (!rawCommandName) {
    return COMMANDS.INVALID;
  }

  return COMMANDS[rawCommandName.toUpperCase()] || COMMANDS.INVALID;
}