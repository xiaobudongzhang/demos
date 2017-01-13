var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//bootstrap js
//var jQuery=require('jquery');
//require('bootstrap');
//bootstrap js

//require('bootstrap/dist/css/bootstrap.css');

module.exports={
		devtool: 'eval-source-map',
		entry:{
		    app:[__dirname+"/src/main.js","webpack-hot-middleware/client?reload=true"]
	//	    express:[__dirname+"/src/express.js"]//"hot":"webpack-hot-middleware/client?reload=true"
		},
		output:{
				path:__dirname+"/dist",
				filename:"[name].index.js"
			},
		devServer:{
			contentBase:"./public",
			color:true,
			inline:true
		        //historyApiFallback:true//index.html 入口
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
					loader:'style!css'
				},
			        {
				       test:/\.vue$/,
				       loader:'vue'
			       },
			       {
				       test:/\.less$/,
				       loader:'less'
			       },
			    
			       { 
				   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				   loader: "file" 
			       },
			       { 
				   test: /\.(woff|woff2)$/,
				   loader:"url?prefix=font/&limit=5000" 
			       },
			       {
				   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				   loader: "url?limit=10000&mimetype=application/octet-stream"
			       },
			       {
				   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
				   loader: "url?limit=10000&mimetype=image/svg+xml"
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
		//new webpack.optimize.OccurenceOrderPlugin(),
		//new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("[name]-[hash].css")//@todo byz
		//new ExtractTextPlugin("style.css")
	       /* new webpack.ProvidePlugin({
                    $: "jquery",
                    jQuery: "jquery",
		    "window.jQuery": "jquery"
                 })*/,
	     new webpack.HotModuleReplacementPlugin(),
	     new webpack.optimize.OccurenceOrderPlugin(),
	     new webpack.NoErrorsPlugin()
	],
   resolve: {
	alias: {
	  // 'vue$': 'vue/dist/vue.common.js'
	//    '$' :'/jquery/dist/jquery.js'
	}
    },
/*externals: {
     "jquery": "jQuery"
 },*/
     vue: {
      loaders: {
    //   css: ExtractTextPlugin.extract("css"),
      // less: ExtractTextPlugin.extract("css!less"),
       // html: 'raw'
	js:'babel'
    }

  }
	

}
