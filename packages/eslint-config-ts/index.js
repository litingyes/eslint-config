module.exports = {
  extends: ['@liting-yes/eslint-config-base', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
