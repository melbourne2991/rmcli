const assert = require('assert');
const { COMMANDS } = require('../../lib/constants');
const parseInput = require('../../lib/cli/parseInput');

describe('parseInput', () => {
  let result;

  describe('valid command', () => {
    describe('with no parameters', () => {
      beforeEach(() => {
        const testInput = COMMANDS.PLACE;
        result = parseInput(testInput);
      });

      it('should return an object with correct command name', () => {
        assert.equal(result.name, COMMANDS.PLACE);
      });

      it('should return an object with empty array of params', () => {
        assert.deepEqual(result.params, []);
      });
    });

    describe('with parameters', () => {
      beforeEach(() => {
        const testInput = `${COMMANDS.PLACE} X,Y,F`;
        result = parseInput(testInput);
      });

      it('should return an object with correct params', () => {
        assert.deepEqual(result.params, ['X', 'Y', 'F']);
      });
    });

    describe('lowercase', () => {
      beforeEach(() => {
        const testInput = `${COMMANDS.PLACE.toLowerCase()}`;
        result = parseInput(testInput);
      });

      it('should return an object with correct commandName', () => {
        assert.equal(result.name, COMMANDS.PLACE);
      });
    });

    describe('whitespace', () => {
      beforeEach(() => {
        const testInput = ` ${COMMANDS.PLACE}   X,Y,F `;
        result = parseInput(testInput);
      });

      it('should return correct command', () => {
        assert.deepEqual(result.name, COMMANDS.PLACE);        
      });

      it('should return params', () => {
        assert.deepEqual(result.params, ['X', 'Y', 'F']);
      });
    });
  });

  describe('invalid command', () => {
    beforeEach(() => {
      result = parseInput('notvalid');
    });

    it('should return command with name INVALID', () => {
      assert.equal(result.name, COMMANDS.INVALID);
    });
  });
});