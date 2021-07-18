// ESLint docs -- Configuring ESLint:      https://eslint.org/docs/user-guide/configuring
// ESLint docs -- List of available rules: https://eslint.org/docs/rules/

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    allowImportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'import/prefer-default-export': 'off',
    eqeqeq: 1,
    'no-eval': 1,
    'no-trailing-spaces': 1,
    'no-mixed-spaces-and-tabs': 1,
    indent: ['error', 2],
    'eol-last': 1,
    'spaced-comment': 1,
    'arrow-spacing': 1,
    'max-len': [
      'error',
      {
        code: 140,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
