const localpkg = require('local-pkg')

const hasVue = localpkg.isPackageExists('vue')
const hasReact = localpkg.isPackageExists('react')
const hasTs = localpkg.isPackageExists('typescript')

module.exports = {
  'extends': [
    hasVue ? '@liting-yes/eslint-config-vue' : '',
    hasReact ? '@liting-yes/eslint-config-react' : '',
    ! hasVue && ! hasReact && hasTs ? '@liting-yes/eslint-config-ts' : '@liting-yes/eslint-config-base',
  ],
}
