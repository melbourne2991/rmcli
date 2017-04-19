const proxyquire = require('proxyquire');
const assert = require('assert');
const sinon = require('sinon');

describe('cli', () => {
  let cli, onCommand, readline, rl, parseInput, parsedInput;

  beforeEach(() => {
    parsedInput = 'fakeParsedInput';
    onCommand = sinon.spy();
    parseInput = sinon.stub().returns(parsedInput);

    rl = {
      prompt: sinon.spy(),
      on: sinon.spy()
    };

    readline = {
      createInterface: sinon.stub().returns(rl)
    };

    cli = proxyquire('../../lib/cli', {
      'readline': readline,
      './parseInput': parseInput
    });

    cli(onCommand);
  });

  it('should initialize readline', () => {
    assert(readline.createInterface.called);
  });

  it('should prompt the user', () => {
    assert(rl.prompt.called);
  });

  describe('on line input', () => {
    beforeEach(() => {
      // Simulates calling callback
      rl.on.callArg(1);
    });

    it('should call onCommand callback', () => {
      assert(onCommand.calledWith(parsedInput));
    });

    it('should prompt the user', () => {
      assert(rl.prompt.calledTwice);
    });
  });
});