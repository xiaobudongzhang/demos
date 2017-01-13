<template>
<div id="app">

<!--<div class="message leftBox">
<h1>{{ msg }}</h1>
<ul>

<li> 
<router-link to="/shop">Shop</router-link>
</li>

<li>
 <router-link to="/person">person</router-link>
</li>

<li>
<router-link to="/shop/detail">shopdetail</router-link>
</li>



<li>
<router-link to="/regandlog/login">login</router-link>
</li>

<ul>
</div>

<div class="rightBox">-->
     <router-view></router-view>
<!--</div>

</div>-->
 
</template>

<script>
import regandlog from './page/loginAndRegister/regandlog.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  render(){
//	return render: h => h(regandlog)
  }
}
</script>

<style>
.message {
 color: blue;
}
.leftBox {float:left; width:50%;}
.rightBox {float:left;}
</style>
