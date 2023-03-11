module.exports = {
  'extends': [
    '@liting-yes/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  overrides: [
    {
      files:    [ '*.ts' ],
      parser:   '@typescript-eslint/parser',
      settings: {
        'import/resolver': {
          node:       true,
          typescript: true,
        },
      },
    },
  ],
  plugins: [ '@typescript-eslint' ],
  rules:   {
    '@typescript-eslint/consistent-type-definitions': [
      'error',
      'interface',
    ],
  },
}
