module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    // ESLintルール
    indent: ['error', 2], // インデントを2にする
    'space-infix-ops': 'error', // 演算子の間に空白がない場合エラー
    'comma-spacing': ['error', { before: false, after: true }], // カンマの前後の空白設定
    'brace-style': 'error', // if-elseの{}は同一行に記述する設定
    quotes: ['error', 'single'], // ダブルクォートの禁止
    semi: ['error', 'always'], // セミコロン必須
    'block-spacing': 'error', // {}内の半角スペースを入れる
    'eol-last': ['error', 'always'], // 最終行に1行追加する
    'no-var': 'error', // varの使用禁止
    'max-params': ['error', 3], // 引数4以上でエラーにする
    eqeqeq: ['error', 'always'], // 比較演算子===と!==の厳密な使用を要求
    // const使用すること、配列のindexはマジックナンバー許容
    // "no-magic-numbers": ["error", { "enforceConst": true,"ignoreArrayIndexes": true }],
    yoda: 'error', // ヨーダ記法禁止
    'no-shadow': 'error', // シャドーイング禁止
    'no-dupe-args': 'error', // 関数の重複引数禁止
    'no-unreachable': 'error', // 到達不能コードのチェック
  },
};
