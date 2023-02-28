module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: false,
    },
  },
  ignorePatterns: [
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE',
    'public',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '!.vscode',
    '!.github',
  ],
  extends: 'eslint:recommended',
}
