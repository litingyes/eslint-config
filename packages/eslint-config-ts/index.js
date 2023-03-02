module.exports = {
  extends: ['@liting-yes/eslint-config-base', 'plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/resolver': {
          typescript:true,
          node: true
        }
      }
    },
  ],
}
