// 引用两个函数，一个是创建路由createRouter、createWebHistory路由模式
import {createRouter,createWebHistory} from 'vue-router'

// const Home =() => import('../views/Home.vue')

const Body =() => import('../views/body/Body.vue')
/* 分页组件 */
const Home =() => import('../views/mian/home/Home.vue')
const Discover =() => import('../views/mian/discover/Discover.vue')
const Order =() => import('../views/mian/order/Order.vue')
const OrderDetail = () => import('../views/mian/order/children/OrderDetail.vue')
const OrderCheckout = () => import('@comps/checkout/Checkout.vue')
const AddressSelect = () => import('@comps/checkout/children/AddrSelect.vue')

const Rate = () => import('@comps/rate/Rate.vue')
const Mine =() => import('../views/mian/mine/Mine.vue')
const Address = () => import('@/views/mian/mine/children/address/Address.vue')
const AddressAdd = () => import('@/views/mian/mine/children/address/children/AddressAdd.vue')
const AddressEdit = () => import('@/views/mian/mine/children/address/children/AddressEdit.vue')

const Detail = () => import('../views/mian/detail/Detail.vue')
/* 详情子组件 */
const Menu = () => import('../views/mian/detail/children/menu/Menu.vue')
const Evaluate = () => import('../views/mian/detail/children/evaluate/Evaluate.vue')
const Merchant =() => import('../views/mian/detail/children/merchant/Merchant.vue')

const NotFound = () => import('@comps/404/NotFound.vue')
const Login = () => import('@comps/login/Login.vue')

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
    path:'/login',
    name:'LOGIN',
    component: Login,
  },
  { /* 详情页 */
    path:'/detail',
    name:'DETAIL',
    component: Detail,
    redirect: '/detail/menu',
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
  { /* 订单详情 */
    path:'/order/order-detail',
    component: OrderDetail
  },
  { /* 订单确认 */
    path:'/order/checkout',
    component: OrderCheckout
  },
  { /* 选择收货地址 */
    path:'/order/checkout/addr-select',
    component: AddressSelect
  },
  { /* 订单评价 */
    path:'/order/rate',
    component: Rate
  },
  { /* 我的地址 */
    path: '/mine/address',
    component: Address
  },
  { /* 添加地址 */
    path: '/mine/address/add',
    component: AddressAdd
  },
  { /* 修改地址 */
    path: '/mine/address/edit',
    component: AddressEdit
  },
  { /* 404 */
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound
  }
]
const router= createRouter({
	history:createWebHistory(),//mode:'history'
	routes
})

export default router;