/* 首页模块 */
import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
function orderDetailModel(){
	const {proxy}= getCurrentInstance();
	const data =reactive({
    show: {
      progress: false,
      insurance: false,
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