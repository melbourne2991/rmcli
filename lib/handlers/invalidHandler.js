const logger = require('../logger');

module.exports = function invalidHandler(state) {
  logger('Not a valid command, valid commands include: PLACE, MOVE, LEFT, RIGHT, REPORT');
  return state;
};