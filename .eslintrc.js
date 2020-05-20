// yarn add -D eslint
// yarn eslint --init

// prettierを使う場合
// yarn add -D prettier eslint-config-prettier  // ESLintとPrettierの競合をよしなに取り計らう

// yarn eslint --init で自動生成されるデフォルト設定
export default {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
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
  plugins: ['react'],
  rules: {},
};

// eslint-config-prettierを追加した場合は"extends"の最後!!に”prettier"を追加する
export default {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'], // @@@
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
  plugins: ['react'],
  rules: {},
};
