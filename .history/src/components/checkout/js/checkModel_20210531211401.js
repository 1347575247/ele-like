/* 首页模块 */
import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
function orderDetailModel(){
	const {proxy}= getCurrentInstance();
	const data =reactive({
    show: {
      insurance: false,
      /* 是否展示选择配送时间 */
      deliverTimeShow: false
    }
  })
  
  function back() {
    console.log('back')
    proxy.$router.back()
  }

	return{
    ...toRefs(data),
    back
	}
}

export default orderDetailModel;