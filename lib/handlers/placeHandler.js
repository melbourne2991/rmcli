const { isNumber, withinBounds } = require('../utils');
const logger = require('../logger');
const { 
  DIRECTIONS, 
  AXES,
  AXES_MIN_SIZES,
  AXES_MAX_SIZES
} = require('../constants');

module.exports = function placeHandler(state, params) {
  const parsedParams = parseParams(params);

  if (!parsedParams) {
    return state;
  }

  const { x, y, facing } = parsedParams;
  const update = { x, y, facing };

  return Object.assign({}, state, update);
}

function parseParams(params) {
  if (params.length < 3) {
    logger('Not enough parameters, PLACE requires "X,Y,F", ignoring command...');
    return false;
  }

  const [x, y, facing] = params;
  const xInt = parseInt(x);
  const yInt = parseInt(y);

  if (!isNumber(xInt)) {
    logger(`"${x}" is not a valid value for X, must be an integer, ignoring command...`);
    return false;
  }

  if (!isNumber(yInt)) {
    logger(`"${y}" is not a valid value for Y, must be an integer, ignoring command...`);
    return false;
  }

  const direction = facing && DIRECTIONS[facing.toUpperCase()];

  if (!direction) {
    logger(`"${facing}" is not a valid direction, valid directions are: NORTH, SOUTH, EAST, WEST, ignoring command...`);
    return false;
  }

  if (!withinBounds(x, AXES.X)) {
    logger(`X axis is out of bounds, must be greater than or equal to ${AXES_MIN_SIZES[AXES.X]} and less than or equal to ${AXES_MAX_SIZES[AXES.X]}`);
    return false;
  }

  if (!withinBounds(y, AXES.Y)) {
    logger(`Y axis is out of bounds, must be greater than or equal to ${AXES_MIN_SIZES[AXES.Y]} and less than or equal to ${AXES_MAX_SIZES[AXES.Y]}`);
    return false;
  }

  return {
    x: xInt,
    y: yInt,
    facing: direction
  };
}