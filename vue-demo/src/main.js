import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routerconfig  from './routerconfig.js'
import test22 from './test.json'

var VueResource = require('vue-resource');

Vue.use(VueResource);

global.jQuery = require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');



Vue.use(VueRouter);

const router = new VueRouter({
    routes: routerconfig
})


var vm=new Vue({
    data:{
	hi:"hello"
    },
    render: h => h(App),
    router:router
}).$mount('#app')

//console.log("vue ");

