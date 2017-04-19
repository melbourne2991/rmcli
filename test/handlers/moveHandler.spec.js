const assert = require('assert');
const moveHandler = require('../../lib/handlers/moveHandler');
const { DIRECTIONS } = require('../../lib/constants');

describe('moveHandler', () => {
  describe('robot not has not yet been placed', () => {
    it('should not return a new state', () => {
      const state = {
        x: null,
        y: null,
        facing: null
      };

      assert.equal(moveHandler(state), state);
    });
  });

  describe('initial state is 0,0,NORTH', () => {
    let state, result;

    beforeEach(() => {
      state = {
        x: 0,
        y: 0,
        facing: DIRECTIONS.NORTH
      };

      result = moveHandler(state)
    });

    it('should return a new state object', () => {
      assert.notEqual(result, state);
    });

    it('should return new state: 0,1,NORTH', () => {
      assert.deepEqual(result, {
        x: 0,
        y: 1,
        facing: DIRECTIONS.NORTH
      });
    });
  });

  describe('initial state is 0,4,NORTH', () => {
    let state, result;

    beforeEach(() => {
      state = {
        x: 0,
        y: 4,
        facing: DIRECTIONS.NORTH
      };

      result = moveHandler(state)
    });

    it('should not return a new state', () => {
      assert.equal(result, state);
    });
  });  
});