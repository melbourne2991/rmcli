const { robotHasNotBeenPlaced } = require('../utils');
const logger = require('../logger');

module.exports = function reportHandler(state) {
  if (robotHasNotBeenPlaced(state)) {
    logger('The robot must be placed before it can be moved, ignoring command...');
    return state;
  }

  const { x, y, facing } = state;
  logger(`>>> Output: ${x},${y},${facing}`);

  return state;
}