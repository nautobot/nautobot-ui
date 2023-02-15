/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['node_modules', 'package-lock.json', '/dist'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'node',
    'prefer-arrow',
    'react',
    'react-hooks',
  ],
  root: true,
  rules: {
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    curly: ['error', 'all'],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['error', 'warn', 'info'],
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: false,
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        allowStandaloneDeclarations: false,
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: true,
      },
    ],
    'prefer-const': ['error'],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        reservedFirst: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
