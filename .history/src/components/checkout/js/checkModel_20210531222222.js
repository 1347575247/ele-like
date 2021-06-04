/* 首页模块 */
import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
function orderDetailModel(){
	const {proxy}= getCurrentInstance();
	const data =reactive({
    show: {
      insurance: false,
      /* 是否展示选择配送时间 */
      deliverTimeShow: false
    },
    activeId: 1,
    activeIndex: 0,
    deliver: {
      mode: '立即送出',
      arrivedTime: '30分钟后送达',
      deliverTime: '今天 9:00 开始配送'
    }
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
        hours -= 1  
      }
      // 小时是否为个位数
      if(Math.floor(hours / 10) === 0) {
        hours = '0' + hours
      }
      
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