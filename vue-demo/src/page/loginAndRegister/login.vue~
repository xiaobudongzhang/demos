<template>

<form class="form-horizontal" role="form">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">5Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email" v-model="email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" v-model="passwd" placeholder="Password">
    </div>
  </div>
  <!--<div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>
-->
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button v-on:click.prevent="login" type="submit" class="btn btn-default">登录</button>
    </div>
  </div>
</form>

</template>

<script  type="text/ecmascript-6">
export default {
       data(){
	return {
	       email:'',
	       passwd:''
	}
       },
       methods:{
	login(){
		this.$http.post('/regandlog/login', 
			       {'email':this.$data.email,'passwd':this.$data.passwd}).then(
			       (response)=>{

						    if(response.body.code=='00000'){
							
							this.$router.push({path:'/home'});	
						    }else{
							console.log("登录失败");
						    }
			    },
			    (error)=>{
			
			   });
	}

       }

}

</script>

<style rel="stylesheet/less" lang="less">
</style>

