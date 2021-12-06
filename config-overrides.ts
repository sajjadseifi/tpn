// config-overrides.js
const { alias, configPaths } = require('react-app-rewire-alias')

module.exports = function override(config) {
  const conf = configPaths('./tsconfig.paths.json')

  return alias(conf)(config)
}
