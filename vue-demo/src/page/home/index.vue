<template>

<div>
   <comnav>
   </comnav>

 <div class="container-fluid">
  <div class="row-fluid">
    <div class="span2">
       <combodyleft> </combodyleft>
    </div>
    <div class="span7">
	 <router-view></router-view>
    </div>
  </div>
</div>
 

</div>

</template>

<script>
import comnav from './nav.vue'
import combodyleft from './body_left.vue'


export default {
  data () {
    return {
      msg: 'shoptem'
    }
  },
  methods:{
	
  },
  components:{
	comnav,
	combodyleft
  }
}
</script>

<style rel="stylesheet/less" lang="less">
@import "../../assets/css/common.less";
</style>

