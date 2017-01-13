var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports={
		devtool: 'eval-source-map',
		entry:__dirname+"/src/main.js",
		output:{
				path:__dirname+"/dist",
				filename:"index.js"
			},
		devServer:{
			contentBase:"./public",
			color:true,
			inline:true,
			port:8081
		},
		module:{
			loaders:[
				{
					test:/\.json$/,
					loader:"json"
				},
				{
					test:/\.js$/,
					exclude:/node_modules/,
					loader:'babel',
				},
				{
					test:/\.css$/,
			//			loader:'style!css?modules!postcss'
			
				 loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
				}

			]	
		},

	postcss:[
		require('autoprefixer')
	],
	plugins:[
		new HtmlWebpackPlugin({
			         template: __dirname + "/src/index.tmpl.html"
					     }),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("[name]-[hash].css")
		//new ExtractTextPlugin(".css/style.css")
	]
	

}
