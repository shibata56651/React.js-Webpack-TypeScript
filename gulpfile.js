const { src, dest, series, gulp, watch } = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

const ejsCompile = (done) => {
  src(['_dev/ejs/**/*.ejs', '!' + '_dev/ejs/inc/*.ejs'])
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(dest('docs/'));
  done();
};

/**
 * sass→cssコンパイル
 */
const cssSass = () => {
  return src('_dev/sass/main.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('docs/common/css'));
};

/**
 * 既存のcssをminify化
 */
const minifyCss = (done) => {
  src(['docs/common/css/**.css', '!docs/common/css/**.min.css'], { sourcemaps: true })
    .pipe(postcss(cssnano))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(dest('docs/common/css', { sourcemaps: 'sourcemaps' }));

  done();
};


/**
 * ローカルサーバー立ち上げ
 */
const browserSyncFunc = () => {
  browserSync.init(browserSyncOption);
};

const browserSyncOption = {
  server: './docs/',
};

/**
 * リロード
 */
const browserSyncReload = (done) => {
  browserSync.reload();
  done();
};

// ファイルの監視
function watchTask(done) {
  watch(['_dev/ejs/**/*.ejs'], ejsCompile);
  watch(['_dev/sass/**/*.scss'], cssSass);
  watch(['docs/common/css/main.css'], minifyCss);
  watch(['_dev/ejs/**/*.ejs', '_dev/scss/**/*.scss', '_dev/js/**/*.js'], browserSyncReload);
  done();
}

exports.default = series(ejsCompile, watchTask, browserSyncFunc);
