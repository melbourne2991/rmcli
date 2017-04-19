const { getMatches } = require('../utils');
const parseCommandName = require('./parseCommandName');
const parseParams = require('./parseParams');

const INPUT_REGEXP = '(\\S)+';

// Parse the input - tolerates white space and lowercase commands.
module.exports = function parseInput(input) {
  const trimmedInput = input.trim();
  const matches = getMatches(trimmedInput, INPUT_REGEXP);

  const rawCommandName = matches[0];
  const rawParams = matches[1];

  const name = parseCommandName(rawCommandName);
  const params = parseParams(rawParams);

  return {
    name,
    params
  };
}
