let logger = (...args) => console.log(...args);

// Supress log output for tests
if (process.env.NODE_ENV === 'test') {
  logger = () => {};
}

module.exports = logger;