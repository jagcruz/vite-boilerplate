module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'react-hooks', 'react-refresh'],
  parser: '@typescript-eslint/parser',
  settings: { react: { version: 'detect' } },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
