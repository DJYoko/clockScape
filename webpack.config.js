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
			{
				test: /\.scss/,
				use: [
                    'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false,
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
							sourceMap: enabledSourceMap,
						}
          }
        ],
      },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],

      },
			{
				test: /\.png$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]'
				}
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
