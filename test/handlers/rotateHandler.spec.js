const assert = require('assert');
const rotateHandler = require('../../lib/handlers/rotateHandler');
const { 
  DIRECTIONS, 
  ROTATION_MODIFIER_MAP, 
  COMMANDS 
} = require('../../lib/constants');

describe('rotateHandler', () => {
  let state;

  describe('robot not has not yet been placed', () => {
    it('should not return a new state', () => {
      const state = {
        x: null,
        y: null,
        facing: null
      };

      assert.equal(rotateHandler(state), state);
    });
  });

  describe('Current direction is NORTH', () => {
    beforeEach(() => {
      state = {
        x: 0,
        y: 0,
        facing: DIRECTIONS.NORTH
      };
    });

    describe('rotate right', () => {
      it('should return a new state with direction set to EAST', () => {
        const result = rotateHandler(state, ROTATION_MODIFIER_MAP[COMMANDS.RIGHT]);
        assert.equal(result.facing, DIRECTIONS.EAST);
      });
    });

    describe('rotate left', () => {
      it('should return a new state with direction set to WEST', () => {
        const result = rotateHandler(state, ROTATION_MODIFIER_MAP[COMMANDS.LEFT]);
        assert.equal(result.facing, DIRECTIONS.WEST);        
      });
    });
  });

  describe('Current direction is SOUTH', () => {
    beforeEach(() => {
      state = {
        x: 0,
        y: 0,
        facing: DIRECTIONS.SOUTH
      };
    });

    describe('rotate right', () => {
      it('should return a new state with direction set to WEST', () => {
        const result = rotateHandler(state, ROTATION_MODIFIER_MAP[COMMANDS.RIGHT]);
        assert.equal(result.facing, DIRECTIONS.WEST);
      });
    });

    describe('rotate left', () => {
      it('should return a new state with direction set to EAST', () => {
        const result = rotateHandler(state, ROTATION_MODIFIER_MAP[COMMANDS.LEFT]);
        assert.equal(result.facing, DIRECTIONS.EAST);        
      });
    });
  });  
});