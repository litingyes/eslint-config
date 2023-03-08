const localpkg = require('local-pkg')

const hasTS = localpkg.isPackageExists('typescript')

module.exports = {
  'extends': [
    hasTS ? '@liting-yes/eslint-config-ts' : '@liting-yes/eslint-config-base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
}
