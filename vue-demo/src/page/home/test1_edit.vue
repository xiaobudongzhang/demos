<template>
<div class="col-md-10  main selfcss">
<form role="form">
  <div class="form-group">
    <label for="exampleInputEmail1">用户名</label>
    <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" placeholder="">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">手机号</label>
    <input type="text" v-model="phone" class="form-control" id="exampleInputPassword1" placeholder="">
  </div>
  <button v-on:click.prevent="sub" type="submit" class="btn btn-default">提交</button>
</form>
</div>

</template>

<script>

export default{
     created(){
	var id=this.$route.params.id;
	this.$http.get('/data/user/one?id='+id).then((res)=>{
		var data=res.body.data;
		
		this.name=data.nickname;
		this.phone=data.phone
	});
      },
      data(){
	 return {
               name:'',
               phone:''
        }
      },
      methods:{
	sub(){
		this.$http.post('/data/user/update',
		{'name':this.$data.name,'phone':this.$data.phone,'id':this.$route.params.id}).
		then(
		(res)=>{
			if(res.body.code!=='00000'){
				console.log("提交失败");
			}
		},
		(error)=>{
			if(error)
			console.log(error);
		}
		);
	}
      }               
}
</script>