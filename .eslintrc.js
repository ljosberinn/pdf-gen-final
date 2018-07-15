module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  rules: {
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'arrow-parens': [2, 'as-needed'],
    'max-len': ['warn', 250],
    'no-return-assign': 'off',
    'radix': 'off',
    'no-useless-escape': 'off',
    'no-mixed-operators': 'off',
    'func-names': 'off',
    'no-alert': 'off',
    'no-void': 'off',
    'no-restricted-globals': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'comma-dangle': 'off'
  }
};
