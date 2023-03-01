module.exports = {
  extends: ['@liting-yes/eslint-config-base', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
