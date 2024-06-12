const path = require('path');

module.exports = {
	
	mode: 'development',
	entry: './src/main.ts',
	devtool: 'source-map',
	module:{

		rules: [

			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {

		extensions: [ '.ts' ],
	},
	output: {

		path : path.resolve(__dirname, 'dist'),
		filename: 'main.bundle.js'
	},
	
};
