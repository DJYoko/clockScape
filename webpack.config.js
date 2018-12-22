const {
	VueLoaderPlugin
} = require('vue-loader')

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
