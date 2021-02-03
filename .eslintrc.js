module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: 'tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  // plugins: [
  //   '@typescript-eslint/eslint-plugin',
  // ],
  // extends: [
  //   'plugin:@typescript-eslint/eslint-recommended',
  //   'plugin:@typescript-eslint/recommended',
  //   'prettier',
  //   'prettier/@typescript-eslint',
  // ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {},
}
