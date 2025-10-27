import baseConfig from '@jsimck/eslint-config';

export default [
  ...baseConfig,
  {
    rules: {
      'react/no-array-index-key': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
];
