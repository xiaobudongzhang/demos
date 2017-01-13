<template>
<div class="col-sm-3 col-md-2 sidebar">
      

	<div v-for="item in items">            

	    <a  data-toggle="collapse" aria-expanded="false" class="collapsed"  :href=item.summaryId>{{item.summary}}
	    <span class="sr-only">(current)</span>
	    </a>
	    

	    <div :id=item.summaryIdLess>
	     <ul class="nav nav-sidebar">
             	 <li v-for="one in item.list">
		     <a :href=one.href>{{one.data}}</a>
		 </li>
	     </ul>
	    </div>
        </div>
          

</div>
</template>
<script>
export default{
       data(){
	return {
	       items:[
			{
				summary:'总计',
				summaryId:'#zhongji',
				summaryIdLess:'zhongji',
				list:[
					 {
						href:'#/home/test1',
						data:'test1'
				         },
					 {
						href:'#/home/test2',
						data:'test2'
				         }
				]		
			}
	       
	       ]
	}
       }
}
</script>