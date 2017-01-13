var express=require('express');
var webpack=require('webpack');
var webpackMiddlerware=require("webpack-dev-middleware");
var fs=require('fs');
var bodyParser=require('body-parser');
var expressRouter=require('./express_router.js');

var app=express();
var webpackconfig=require('../webpack.config.js');
var compiler = webpack(webpackconfig)
//console.log(webpackMiddlerware(compiler));

app.use(webpackMiddlerware(compiler, {
    noInfo: false, publicPath: webpackconfig.output.publicPath 
}));
app.use(require("webpack-hot-middleware")(compiler));
app.use(expressRouter);

var router_path=require.resolve('./express_router.js');

/*fs.watch(router_path, function () {
    console.log(require.cache[router_path]);
    require.cache[router_path] = null;
 try {
  router = require('./express_router.js');
 } catch (ex) {
    console.log('errr');
  console.error('module update failed');
 }
});*/ //@todo byz
 

module.exports=app.listen(8080,'192.168.1.38',function(){
});
