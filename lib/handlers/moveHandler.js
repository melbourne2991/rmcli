const { 
  DIRECTIONS_TO_AXES_MAP, 
  DIRECTIONS_TO_MODIFIER_MAP 
} = require('../constants');

const { withinBounds, isUndefined, robotHasNotBeenPlaced } = require('../utils');
const logger = require('../logger');

module.exports = function moveHandler(state) {
  if (robotHasNotBeenPlaced(state)) {
    logger('The robot must be placed before it can be moved, ignoring command...');
    return state;
  }

  const axis = DIRECTIONS_TO_AXES_MAP[state.facing];
  const nextValue = state[axis] + DIRECTIONS_TO_MODIFIER_MAP[state.facing];

  if (!withinBounds(nextValue, axis)) {
    logger('Executing this command would result in our beloved robot falling off the table, ignoring command!!');
    return state;
  }

  const update = {
    [axis]: nextValue
  };

  return Object.assign({}, state, update);
};