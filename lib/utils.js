const {
  AXES_MIN_SIZES, 
  AXES_MAX_SIZES
} = require('./constants');

module.exports = {
  getMatches,
  isNumber,
  withinBounds,
  isUndefined,
  robotHasNotBeenPlaced
};

function robotHasNotBeenPlaced({ x, y, facing }) {
  return (
    isUndefined(x) ||
    isUndefined(y) ||
    isUndefined(facing)
  );
}

function getMatches(str, pattern) {
  const regexp = new RegExp(pattern, 'g');
  const matches = [];

  let match = regexp.exec(str);

  while (match != null) {
    matches.push(match[0]);
    match = regexp.exec(str);
  }

  return matches;
}

function isUndefined(val) {
  return (val === undefined || val === null);
}

function isNumber(int) {
  return !isNaN(int);
}

function withinBounds(int, axis) {
  return (int <= AXES_MAX_SIZES[axis] && int >= AXES_MIN_SIZES[axis]);
}