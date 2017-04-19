const assert = require('assert');
const { DIRECTIONS } = require('../../lib/constants');
const sinon = require('sinon');
const proxyquire = require('proxyquire');
let reportHandler = require('../../lib/handlers/reportHandler');

describe('reportHandler', () => {
  let state;

  describe('robot not has not yet been placed', () => {
    it('should not return a new state', () => {
      state = {
        x: null,
        y: null,
        facing: null
      };

      assert.equal(reportHandler(state), state);
    });
  });

  describe('robot is on table', () => {
    let logger;

    beforeEach(() => {
      state = {
        x: 2,
        y: 3,
        facing: DIRECTIONS.NORTH
      };

      logger = sinon.spy();

      reportHandler = proxyquire('../../lib/handlers/reportHandler', {
        '../logger': logger
      });

      reportHandler(state);
    });

    it('should report robot\'s current position', () => {
      assert(logger.getCall(0).args[0].includes('2,3,NORTH'));
    });
  });
});