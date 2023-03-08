const localpkg = require('local-pkg')

const hasTS = localpkg.isPackageExists('typescript')
const isVue2 = localpkg.getPackageInfo('vue')?.version?.startsWith('2')

module.exports = {
  'extends': [
    hasTS ? '@liting-yes/eslint-config-ts' : '@liting-yes/eslint-config-base',
    isVue2 ? 'plugin:vue/recommended' : 'plugin:vue/vue3-recommended',
  ],
}
