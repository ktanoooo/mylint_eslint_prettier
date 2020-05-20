module.exports = {
  // 設定可能なオプションの一部 ()内はデフォルト
  printWidth: 100, // 行の最大長(80)
  trailingComma: 'es5', // 複数行の場合可能な限り文末コンマを出力
  tabWidth: 2, // 1インデントあたりの空白数(2)
  semi: true, // 式の最後にセミコロンを付加(true)
  singleQuote: true, // ダブルクォートの代わりにシングルクォートを使用(false)
  endOfLine: 'lf', // 改行の文字コードを指定
};


// default
// .prettierrcを作成していない場合は下記が適用される
module.exports = {
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
