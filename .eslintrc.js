module.exports = {
  env: {
    browser: true, // document や console にエラーが出ないようにする
    es6: true, // es6から使える let や const にエラーがでないようにする
    jquery: false, // jQueryを使用する場合はtrue
  },
  // eslint-config-prettierを追加した場合は"extends"の最後!!に”prettier"を追加する
  extends: [
    'eslint:recommended',
    // 'plugin:react/recommended',  // react
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  // plugins: ['react'], // react
  rules: {
    'no-var': 'error', //varを許可しない
    'no-unused-vars': 'off', // off: 使用していない定数をエラーにしない
    'require-jsdoc': 'off', // off: Docコメントなくてもエラーにしない
    // 'react/no-set-state': 'error', // reacct
  },
};
