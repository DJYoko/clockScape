const {
	VueLoaderPlugin
} = require('vue-loader')

const MODE = 'development';
const enabledSourceMap = (MODE === 'development');

module.exports = {
	entry: __dirname + "/src/js/clocks.js",
	output: {
		path: __dirname + '/dst/js/',
		filename: 'clocks.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
      },
			{
				test: /\.js$/,
				loader: 'babel-loader',
      },
			// Sassファイルの読み込みとコンパイル
			{
				test: /\.scss/, // 対象となるファイルの拡張子
				use: [
          // linkタグに出力する機能
          'style-loader',
          // CSSをバンドルするための機能
					{
						loader: 'css-loader',
						options: {
							// オプションでCSS内のurl()メソッドの取り込みを禁止する
							url: false,
							// ソースマップの利用有無
							sourceMap: enabledSourceMap,

							// 0 => no loaders (default);
							// 1 => postcss-loader;
							// 2 => postcss-loader, sass-loader
							importLoaders: 2
						},
          },
					{
						loader: 'sass-loader',
						options: {
							// ソースマップの利用有無
							sourceMap: enabledSourceMap,
						}
          }
        ],
      },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
      },
    ]
	},
	resolve: {

		extensions: ['.js', '.vue'],
		alias: {

			vue$: 'vue/dist/vue.esm.js',
		},
	},
	plugins: [
    new VueLoaderPlugin()
  ],
};
