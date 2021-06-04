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
    activeIndex: 0
  })

  const timeSelectItems = [
    {
      text: '今天（周一）',
      children: [
        {text: '22:15（5.0元配送费）', id: 1},
        {text: '22:30（5.0元配送费）', id: 2},
        {text: '22:45（5.0元配送费）', id: 3},
        {text: '22:50（5.0元配送费）', id: 4},
        {text: '22:55（5.0元配送费）', id: 6},
      ]
    },
    {
      text: '明天（周二）',
      children: [
        {text: '9:15（7.0元配送费）', id: 1},
        {text: '9:30（7.0元配送费）', id: 2},
        {text: '9:45（7.0元配送费）', id: 3},
        {text: '9:50（7.0元配送费）', id: 4},
        {text: '9:55（7.0元配送费）', id: 6},
      ]
    },
  ]

  function timeChosen(time) {
    console.log(time)
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