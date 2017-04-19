const readline = require('readline');
const parseInput = require('./parseInput');

module.exports = function initCli(onCommand) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Robot-Movement> '
  });

  rl.prompt();

  rl.on('line', (input) => {
    onCommand && onCommand(parseInput(input));
    rl.prompt();
  });
}
