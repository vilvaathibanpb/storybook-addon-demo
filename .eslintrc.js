module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'is-story-prefix'
  ],
  rules: {
    'jsx-a11y/media-has-caption': [0],
    'no-new': [0],
    'react/button-has-type': [0],
    'react/no-unescaped-entities': [0],
    'react/jsx-props-no-spreading': [0],
    'import/prefer-default-export': [0],
    'import/no-extraneous-dependencies': [0],
    'is-story-prefix/check-story-prefix': [2, {
      customPrefix: "USER_"
    }]
    // 0 - off
    // 1- warn
    /// 2- error
  },
};
