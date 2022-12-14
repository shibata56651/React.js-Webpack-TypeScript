module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    // スナップショットとの比較対象をデモにするならtrue、ローカルにするならfalse
    isCompareDemo: false,
    domain: {
      local: 'http://xxxxxxxxxx:81', // 自分の環境に合わせて変える
      demo: 'https://xxxxxxxx.demo.com/',
    },
    windowSize: {
      pc: {
        width: 1920,
        height: 1080,
      },
      sp: {
        width: 375,
        height: 667,
      },
    },
  },
};
