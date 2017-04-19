const { COMMANDS, ROTATION_MODIFIER_MAP } = require('../constants');

const placeHandler = require('./placeHandler');
const moveHandler = require('./moveHandler');
const rotateHandler = require('./rotateHandler');
const invalidHandler = require('./invalidHandler');
const reportHandler = require('./reportHandler');

const leftHandler = state => rotateHandler(state, ROTATION_MODIFIER_MAP[COMMANDS.LEFT]);
const rightHandler = state => rotateHandler(state, ROTATION_MODIFIER_MAP[COMMANDS.RIGHT]);

module.exports = {
  [COMMANDS.PLACE]: placeHandler,
  [COMMANDS.MOVE]: moveHandler,
  [COMMANDS.LEFT]: leftHandler,
  [COMMANDS.RIGHT]: rightHandler,
  [COMMANDS.INVALID]: invalidHandler,
  [COMMANDS.REPORT]: reportHandler
};
