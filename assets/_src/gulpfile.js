'use strict';

const gulp = require('gulp');
const compass = require('gulp-compass'); //sas,compassビルド
const babel = require('gulp-babel'); //ES5に変換ビルド
const uglify = require('gulp-uglify'); //js圧縮ビルド
const rename = require('gulp-rename'); //リネーム
const stripDebug = require('gulp-strip-debug'); //consoleやalertを削除する

const browserify = require('browserify'); //import/export構文を使える
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const transform = require('vinyl-transform');
const glob = require('glob');

const SCSS_FILE = './scss/**/*.scss'; //scssフォルダパス
const JS_FILE = './js/**/*.js'; //jsフォルダパス
const BUILD_JS_FILE = '../js/*.js'; //jsフォルダパス
//const jsFiles = glob.sync('./js/{!(_)*.js,**/!(_)*/!(_)*.js}');
const jsFiles = glob.sync('./js/*.js');

//sassファイルコンパイル
gulp.task('sass', () => {
  gulp.src([SCSS_FILE])
    .pipe(compass({
      config_file: 'config.rb',
      comments: false,
      css: '../css/',
      sass: 'scss/'
    }));
});

//ES6 から ES5に変換
gulp.task('babel', () => {
  return gulp.src([JS_FILE]) //変換したいES2015で記述したファイルを指定
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))//babel()でバベってくれと記述
    .pipe(gulp.dest('../js/')); //gulp.dest()でファイルの書き出し 今回はjsフォルダに
});

//jsファイルビルド
gulp.task('js', () => {
  // browserify で結合
  return jsFiles.forEach(function (file) {
    const fileName = file.replace(/.+\/(.+\.js)/, '$1');
    const filePath = file.replace(new RegExp('./src/(.*)/.+\.js'), '$1');
    browserify({
      entries: filePath
    })
      .transform(babelify)
      .bundle()
      .pipe(source(fileName))
      .pipe(gulp.dest('../js/'));
  });
});
//js圧縮
gulp.task('minify', () => {
  gulp.src([BUILD_JS_FILE]) //変換したいES2015で記述したファイルを指定
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename({
        extname: '.min.js'
    }))
    .pipe(gulp.dest('../js/')); //gulp.dest()でファイルの書き出し 今回はjsフォルダに
});
gulp.task('watch', () => {
  gulp.watch(SCSS_FILE, (event) => {
    gulp.run('sass');
  });
  gulp.watch(JS_FILE, (event) => {
    gulp.run('js');
  });
});

gulp.task('default', ['watch']);