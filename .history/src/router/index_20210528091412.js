// 引用两个函数，一个是创建路由createRouter、createWebHistory路由模式
import {createRouter,createWebHistory} from 'vue-router'

// const Home =() => import('../views/Home.vue')

const Body =() => import('../views/body/Body.vue')
/* 分页组件 */
const Home =() => import('../views/mian/home/Home.vue')
const Discover =() => import('../views/mian/discover/Discover.vue')
const Order =() => import('../views/mian/order/Order.vue')
const OrderDetail = () => import('../views/mian/order/children/OrderDetail.vue')
const Rate = () => import('@comps/rate/Rate.vue')
const Mine =() => import('../views/mian/mine/Mine.vue')
// const Address = () => import('@/views/mian/mine/children/Address.vue')

const Detail = () => import('../views/mian/detail/Detail.vue')
/* 详情子组件 */
const Menu = () => import('../views/mian/detail/children/menu/Menu.vue')
const Evaluate = () => import('../views/mian/detail/children/evaluate/Evaluate.vue')
const Merchant =() => import('../views/mian/detail/children/merchant/Merchant.vue')
import { path } from 'path';

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
  {
    path:'/detail',
    name:'DETAIL',
    component: Detail,
    children: [
      {
        path: 'menu',
        name: 'MENU',
        component: Menu
      },
      {
        path: 'evaluate',
        name: 'EVALUATE',
        component: Evaluate
      },
      {
        path: 'merchant',
        name: 'MERCHANT',
        component: Merchant
      }
    ]
  },
  {
    path:'/order/order-detail',
    component: OrderDetail
  },
  {
    path:'/order/rate',
    component: Rate
  },
]
const router= createRouter({
	history:createWebHistory(),//mode:'history'
	routes
})

export default router;