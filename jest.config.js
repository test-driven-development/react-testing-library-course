const config = require('kcd-scripts/jest')

module.exports = {
  ...config,
  // we have no coverageThreshold on this project...
  coverageThreshold: {},
  notify: true,
  notifyMode: 'always',
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.+(js|jsx|ts|tsx)',
    '**/+(*.)+(spec|test).+(js|jsx|ts|tsx)',
  ],
}
