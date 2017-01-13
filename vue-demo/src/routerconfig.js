import homeIndex from './page/home/index.vue'
import login from './page/loginAndRegister/login.vue'
import regandlog from './page/loginAndRegister/regandlog.vue'
import homeRightDefault from './page/home/body_right.vue'
import homeRightTest from './page/home/body_right_2.vue'
import test1Edit from './page/home/test1_edit.vue'
//@todo byz 加一个路由模板对应关系
const  approuter2=[
    {
	path:'/home',
        component:homeIndex,
	children:[
	    {
		path:'test1',
		component:homeRightDefault
	    },
	    {
		path:'test1/edit/:id',
		component:test1Edit
	    },
	    {
		path:'test2',
		component:homeRightTest
	    }
	]
	
	
   },
  {
      path:'/regandlog',
      component:regandlog,
      children:[
	  {
	      path:'login',
	      component:login
	  }
      ]
  }   
]


export default approuter2


