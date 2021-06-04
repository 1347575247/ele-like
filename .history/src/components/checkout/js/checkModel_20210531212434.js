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

  const item = [
    {
      text: '今天',
      children: [
        {text: '9:15', id: 1},
        {text: '9:30', id: 2},
        {text: '9:45', id: 3},
        {text: '9:50', id: 4},
        {text: '9:55', id: 6},
      ]
    },
    {
      text: '明天',
      children: [
        {text: '9:15', id: 1},
        {text: '9:30', id: 2},
        {text: '9:45', id: 3},
        {text: '9:50', id: 4},
        {text: '9:55', id: 6},
      ]
    },
  ]
  
  function back() {
    console.log('back')
    proxy.$router.back()
  }

	return{
    ...toRefs(data),
    back,
    item
	}
}

export default orderDetailModel;