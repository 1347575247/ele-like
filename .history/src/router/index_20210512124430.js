// 引用两个函数，一个是创建路由createRouter、createWebHistory路由模式
import {createRouter,createWebHistory} from 'vue-router'

// const Home =() => import('../views/Home.vue')

const Body =() => import('../views/body/Body.vue')
/* 分页组件 */
const Home =() => import('../views/mian/home/Home.vue')
const Discover =() => import('../views/mian/discover/Discover.vue')
const Order =() => import('../views/mian/order/Order.vue')
const Mine =() => import('../views/mian/mine/Mine.vue')

/* routes 路由与组件的映射关系 */
const routes =[
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'/',
		name:'Body',
		component:Body,
		// 配置子路由
		children:[
			{
				path:'home',
				name:'HOME',
				component:Home
			},{
				path:'discover',
				name:'DISCOVER',
				component:Discover
			},{
				path:'order',
				name:'ORDER',
				component:Order
			},{
				path:'mine',
				name:'MINE',
				component:Mine
			}
		]
  },
  
]
const router= createRouter({
	history:createWebHistory(),//mode:'history'
	routes
})

export default router;