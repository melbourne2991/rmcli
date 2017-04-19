const handlers = require('./handlers');

const initialState = {
  x: null,
  y: null,
  facing: null
};

module.exports = function getCommandHandler(state = initialState) {
  return ({ name, params }) => {
    state = handlers[name](state, params);
    return state;
  }
}