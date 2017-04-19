const cli = require('./cli');
const getCommandHandler = require('./getCommandHandler');

// initialize
const handleCommand = getCommandHandler();

// cli does some primitive parsing of command for us
cli((command) => handleCommand(command));