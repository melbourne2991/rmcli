const assert = require('assert');
const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('getCommandHandler', () => {
  let getCommandHandler, handleCommand, handlers, initialState;

  beforeEach(() => {
    initialState = {
      x: 0,
      y: 0,
      facing: 'NORTH'
    };

    handlers = {
      FAKE_HANDLER_1: sinon.spy(),
      FAKE_HANDLER_2: sinon.spy()
    };

    getCommandHandler = proxyquire('../lib/getCommandHandler', {
      './handlers': handlers
    });

    handleCommand = getCommandHandler(initialState);
  });

  it('should return a handleCommand function', () => {
    assert(typeof handleCommand === 'function');
  });

  describe('handleCommand', () => {
    let currentState, params;

    beforeEach(() => {
      params = {
        param1: 'param1'
      };

      currentState = handleCommand({ 
        name: 'FAKE_HANDLER_1',
        params
      });
    });

    it('should call the correct handler', () => {
      assert(handlers.FAKE_HANDLER_1.called);
    });

    it('should call the handler with the correct arguments', () => {
      assert(handlers.FAKE_HANDLER_1.calledWith(initialState, params));
    });
  });
});