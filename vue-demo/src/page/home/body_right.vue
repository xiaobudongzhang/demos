<template>
 <div class="col-sm-9  col-md-10  main selfcss">
          <h2 class="sub-header">Test1 title</h2>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th v-for="item in theads">{{item.name}}</th>
		  <th >操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in tbodys">

                  <td >{{item.id}}</td>
                  <td >{{item.nickname}}</td>
		  <td >{{item.phone}}</td>

		   <td ><a :href=item.href>编辑</a></td>
                </tr>
                
              </tbody>
            </table>
          </div>


<nav>
  <ul class="pagination">
    <li v-if="showPrev"><a href="#">&laquo;</a></li>
    <li v-for="item in pages"><a href="#" v-on:click.prevent="pager">{{item.num}}</a></li>
    <li v-if="showNext"><a href="#">&raquo;</a></li>
  </ul>
</nav>


  </div>
</div>
</template>

<script>
 

export default{
       data(){
       	return{
		theads:[
			{name:'id'},
			{name:'name'},
			{name:'phone'}
			],
		tbodys:this.getpagerdata(1),
		pages:[
			{num:1},
			{num:2},
			{num:3},
			{num:4},
			{num:5}
		],
		showPrev:true,
		showNext:false
		 
	}
       }       
       ,
       methods:{
		pager(el){
			var num=el.target.firstChild.nodeValue;
			var tbody=this.getpagerdata(num);
			this.$data.tbodys=tbody;
		},
		getpagerdata(pager=1){
			var tbodysinit=[];
       			this.$http.get('/data/user/list?page='+pager).				
			then(
				(response)=>{
					response.body.data.forEach(function(val,index,reslult){
						val.href="#/home/test1/edit/"+val.id
						tbodysinit.push(val);
					});
			 	}				
			);
          
		return tbodysinit;
	       }
       }
}
</script>
<style rel="stylesheet/less" lang="less">
.selfcss{
	border-left-style:groove
}
</style>