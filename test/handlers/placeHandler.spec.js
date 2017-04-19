const assert = require('assert');
const placeHandler = require('../../lib/handlers/placeHandler');
const { DIRECTIONS } = require('../../lib/constants');

describe('placeHandler', () => {
  let state;

  beforeEach(() => {
    state = {
      x: null,
      y: null,
      facing: null
    };
  });

  describe('valid params', () => {
    it('should return new state with new position and direction', () => {
      const params = ['4', '3', DIRECTIONS.NORTH];

      // deep compare each prop strictly (to ensure we have integers and not strings)
      assert.deepStrictEqual(placeHandler(state, params), {
        x: 4,
        y: 3,
        facing: DIRECTIONS.NORTH
      });
    });
  });

  describe('invalid params', () => {
    describe('not enough params', () => {
      it('should not return a new state', () => {
        assert.equal(placeHandler(state, []), state);
      });
    });

    describe('X is not an integer', () => {
      it('should not return a new state', () => {
        assert.equal(placeHandler(state, ['X', '1', DIRECTIONS.NORTH]), state);
      });
    });

    describe('Y is not an integer', () => {
      it('should not return a new state', () => {
        assert.equal(placeHandler(state, ['1', 'Y', DIRECTIONS.NORTH]), state);
      });
    });

    describe('direction is invalid', () => {
      it('should not return a new state', () => {
        assert.equal(placeHandler(state, ['1', '1', 'one direction']), state);
      });
    });

    describe('X is not within bounds', () =>{
      it('should not return a new state', () => {
        assert.equal(placeHandler(state, ['10', '0', DIRECTIONS.NORTH]), state);
      });
    });

    describe('Y is not within bounds', () =>{
      it('should not return a new state', () => {
        assert.equal(placeHandler(state, ['0', '-10', DIRECTIONS.NORTH]), state);
      });
    });    
  });
});