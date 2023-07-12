module.exports = {
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: null,
    tsconfigRootDir: './',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/extensions': 0,
  },
};
