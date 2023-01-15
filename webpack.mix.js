const mix = require('laravel-mix');
const path = require('path');

mix.webpackConfig({
  resolve: {
    extensions: ['.vue', '.scss'],
    alias: {
      sass: path.join(__dirname, 'src/sass/'),
      '@src': path.join(__dirname, 'src/'),
      '@js': path.join(__dirname, 'src/js/'),
    },
  },
  module: {
    rules: [],
  },
});

// 全画面共用スクリプト（現状は特に要望がないのでビルドしない）
const cssDirectory = 'docs/css';
mix
  .setPublicPath('docs')
  // .sass('src/sass/common.scss', cssDirectory)

  .version();

mix.js('./src/js/clocks.js', './docs/js').vue();
