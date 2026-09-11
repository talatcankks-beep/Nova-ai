/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: 'next/core-web-vitals',
  rules: {
    'react/display-name': 'off',
    '@next/next/no-img-element': 'off',
  },
};

module.exports = config;
