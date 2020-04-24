module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/essential', '@vue/airbnb'],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    'no-shadow': 'off',
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],

  extends: ['plugin:vue/strongly-recommended', '@vue/airbnb'],

  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
  ],
};
