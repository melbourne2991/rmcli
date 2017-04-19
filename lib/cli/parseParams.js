const PARAMS_SEPARATOR = ',';

module.exports = function parseParams(rawParams) {
  if (rawParams) {
    return rawParams.split(PARAMS_SEPARATOR);
  }

  return [];
}