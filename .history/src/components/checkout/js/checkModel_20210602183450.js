/* 首页模块 */
import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {setStore, getStore} from '@/utils/deposit'

// 默认收货地址
const defaultAddr = {
  address: '尚品铂家酒店(挂绿广场瑞祥店)3楼322房',
  name: '蔡伦多',
  gender: '男士',
  mobile: '13227678973'
}

function orderDetailModel(){
  const $store = useStore()
  const $route = useRoute()
	const {proxy}= getCurrentInstance();
	const data =reactive({
    show: {
      insurance: false,
      /* 是否展示选择配送时间 */
      deliverTimeShow: false,
      isUnfolded: false
    },
    /* 送达时间被选中项id */
    activeId: 1,
    /* 送达时间侧边栏id */
    activeIndex: 0,
    /* 配送时间对象 */
    deliver: {
      mode: '立即送出',
      arrivedTime: '30分钟后送达',
      deliverTime: '今天 9:00 开始配送'
    },
    /* 加购状态 */
    foodState: computed(() => {
      const resId = $route.query.resId
      const obj = $store.state.cart.foods[resId]
      if(obj) {
        let res = Object.assign({}, obj)
        delete res.total
        // 返回购物车加购的商品
        return res
      }
    }),
    /* 加购食品长度 */
    foodLength: computed(() => {
      if(data.foodState) {
        let keys = Object.keys(data.foodState)
        return keys.length
      }
    }),
    firstItem: (foods) => {
      if(foods) {
        let obj = {},
          firstIndex = Object.keys(foods)[0];
        return foods[firstIndex]
      }
      if(data.foodState) {
        let obj = {},
          firstIndex = Object.keys(data.foodState)[0];
        return data.foodState[firstIndex]
      }
      return {}
    },
    feeFormat: (fee) => {
      // fee: "配送费¥3.1"
      if(fee) {
        let [name, value] = fee.split('¥')
        return {name, value}
      }
    },
    /* 当前列表高度 */
    nowListHeight: (foodLength) => {
      let val = foodLength * 1.84 // 1.84为每一项的高度
      return `${val}rem`
    },
    /* 总共优惠多少 */
    dicountTotal: computed(() => {
      let discount = 0
      if(data.foodState) {
        Object.keys(data.foodState).forEach(key => {
          if(data.foodState[key].original_price) {
            discount += Math.abs(data.foodState[key].price - data.foodState[key].original_price)
          }
        })
      }
      return discount ? discount.toFixed(2) : 0
    }),
    /* 总价格 */
    priceTotal: computed(() => {
      let price = 0
      if(data.foodState) {
        Object.keys(data.foodState).forEach(key => {
          price += data.foodState[key].price * data.foodState[key].count
        })
        // 加上配送费与打包费
        console.log(data.firstItem())
        price += data.firstItem().item.specfoods[0].packing_fee
        let deliver_fee = parseInt(data.feeFormat(data.firstItem().item.deliver_fee).value)
        price += deliver_fee
      }
      return price ? price.toFixed(2) : 0
    }),
    /* 收货地址 */
    nowAddr: computed(() => {
      let nowAddr = getStore('nowAddr')
      if(nowAddr) {
        let addrObj = JSON.parse(nowAddr)
        addrObj.address = addrObj.baseAddr + addrObj.detailAddr
        return addrObj
      }else{
        return defaultAddr
      }
    })
  })

  const timeSelectItems = [
    {
      text: '今天（周一）',
      children: [
        {text: '立即送出', id: 1, mode: 1, realTime:'今天（周一）30分钟后 送达'},
        {text: '22:30（5.0元配送费）', id: 2, realTime:'今天（周一）22:30 送达'},
        {text: '22:45（5.0元配送费）', id: 3, realTime:'今天（周一）22:45 送达'},
        {text: '22:50（5.0元配送费）', id: 4, realTime:'今天（周一）22:50 送达'},
        {text: '22:55（5.0元配送费）', id: 6, realTime:'今天（周一）22:55 送达'},
      ]
    },
    {
      text: '明天（周二）',
      children: [
        {text: '09:15（7.0元配送费）', id: 1, realTime:'明天（周二）09:15 送达'},
        {text: '09:30（7.0元配送费）', id: 2, realTime:'明天（周二）09:15 送达'},
        {text: '09:45（7.0元配送费）', id: 3, realTime:'明天（周二）09:15 送达'},
        {text: '09:50（7.0元配送费）', id: 4, realTime:'明天（周二）09:15 送达'},
        {text: '09:55（7.0元配送费）', id: 6, realTime:'明天（周二）09:15 送达'},
      ]
    },
  ]

  function timeChosen(timeItem) {
    console.log(timeItem)
    if(timeItem.mode) {
      data.deliver.mode = "立即送出"
    }else{
      data.deliver.mode = "预订时间"
    }
    // 修改送达时间
    data.deliver.arrivedTime = timeItem.realTime
    // 修改开始配送时间
    let deliverTime = timeItem.text.substring(0, 5)
    let [hours, minutes] = deliverTime.split(':')
    hours = parseInt(hours, 10)
    minutes = parseInt(minutes, 10)
    if(minutes - 30 >= 0) {
      // 30 - 30  ==>  0
      // 分钟是否为个位数
      if(minutes - 30 === 0) {
        minutes = minutes - 30 + '0'
      }else{
        minutes = minutes - 30
      }
      hours -= 1  
      // 小时是否为个位数
      if(Math.floor(hours / 10) === 0) {
        hours = '0' + hours
      }
      console.log(hours)
      
    }else {
      // 29 - 30   ==> 89 - 30 = 59
      minutes = (minutes + 60) - 30
      hours -= 2
      // 小时是否为个位数
      if(Math.floor(hours / 10) === 0) {
        hours = '0' + hours
      }
      
    }
    deliverTime = timeItem.realTime.replace(deliverTime, `${hours}:${minutes}`).replace('送达', '开始配送')
    data.deliver.deliverTime = deliverTime

    // 关闭弹出框
    data.show.deliverTimeShow = false
  }
  
  function back() {
    console.log('back')
    proxy.$router.back()
  }

	return{
    ...toRefs(data),
    back,
    timeSelectItems,
    timeChosen
	}
}

export default orderDetailModel;