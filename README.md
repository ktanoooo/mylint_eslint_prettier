# ESLint + Prettier

- 参考
  - https://wemo.tech/3307

# vscode 上での設定

拡張機能イントール`ESLint`, `Pritter`インストール

- 設定
  - Editor: Format On Save : on
  - Eslint: Enable : on

# yarn add

## ESLint

```
$ yarn add -D eslint
$ yarn eslint --init

# Reactを使う場合
## extends: ['plugin:react/recommended']
## plugins: ["react"]
## rules: { 'react/no-set-state': 'error' }
$ yarn add -D eslint-plugin-react

# TypeScriptを使う場合
## extends: ['plugin:@typescript-eslint/eslint-recommended']
## parser: '@typescript-eslint/parser'
## plugins: ['react', '@typescript-eslint']
$ yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

$ yarn add -D prettier

# googleのコーディング規約をベースにする場合
## googleコーディング規約: https://google.github.io/styleguide/javascriptguide.xml
##  extends: ['google']
$ yarn add -D eslint-config-google

# ESLintとPrettierを一緒に使う場合
## https://prettier.io/docs/en/integrating-with-linters.html#eslint
## eslint-config-prettierを追加した場合は"extends"の<最後>に”prettier"を追加する
## eslint-plugin-prettier: ESLint上でPrettierを動かすためのプラグイン
## eslint-config-prettier: ESLintとPrettierで競合するルールを無効にする
$ yarn add -D eslint-plugin-prettier eslint-config-prettier
```

## ESLint

`yarn eslint --init`で`.eslintrc.js`を自動生成するとその選択項目の内容によって最適な default の内容で生成される

```
// yarn eslint --init で自動生成されるデフォルトファイル例
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
```

## prettier

eslint-config-prettier を追加した場合は"extends"の最後!!に”prettier"を追加する
`.prettierrc.js`を作成しなかった場合は下記内容が default で設定される

```
export default {
 printWidth: 80,
 tabWidth: 2,
 useTabs: false,
 semi: true,
 singleQuote: false,
 quoteProps: "as-needed",
 jsxSingleQuote: false,
 trailingComma: "none",
 bracketSpacing: true,
 jsxBracketSameLine: false,
 arrowParens: "avoid",
 rangeStart: 0,
 rangeEnd: Infinity,
 parser: "none",
 filepath: "none",
 requirePragma: false,
 insertPragma: false,
 proseWrap: "preserve",
 htmlWhitespaceSensitivity: "css",
 vueIndentScriptAndStyle: false,
 endOfLine: "auto",
}
```
