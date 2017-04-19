const { DIRECTIONS_SEQUENCE } = require('../constants');
const { robotHasNotBeenPlaced } = require('../utils');
const logger = require('../logger');

const LAST_IN_SEQUENCE = DIRECTIONS_SEQUENCE.length - 1;
const FIRST_IN_SEQUENCE = 0;

module.exports = function rotateHandler(state, modifier) {
  if (robotHasNotBeenPlaced(state)) {
    logger('The robot must be placed before it can be moved, ignoring command...');
    return state;
  }

  // Rotation is just an alias for the index of the directions sequence
  // e.g NORTH = 0, EAST = 1 etc...
  // Here we get the current index
  const currentRotation = directionToRotation(state.facing);

  // Increment or decrement it
  const nextRotation = currentRotation + modifier;

  const update = {
    facing: rotationToDirection(nextRotation)
  };

  return Object.assign({}, state, update);
}

function directionToRotation(direction) {
  return DIRECTIONS_SEQUENCE.findIndex(d => d === direction);
};

function rotationToDirection(rotation) {
  // if < 0 then we're turning left from north
  // so new direction is west (last item in array), and vice versa..
  if (rotation < FIRST_IN_SEQUENCE) {
    rotation = LAST_IN_SEQUENCE
  } else if (rotation > LAST_IN_SEQUENCE) {
    rotation = FIRST_IN_SEQUENCE
  }

  return DIRECTIONS_SEQUENCE[rotation];
}