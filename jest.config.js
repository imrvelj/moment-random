module.exports = {
  collectCoverageFrom: ['src/*.js'],
  testMatch: ['**/test/**/*.spec.js?(x)'],
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
}
