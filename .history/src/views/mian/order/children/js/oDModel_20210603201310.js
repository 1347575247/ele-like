/* 首页模块 */
import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {Toast} from 'vant';
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

  // 点击复制信息
  function copySuccess() {
    Toast.success({
      iconSize: '60',
      message: '复制成功'
    })
  }

	return{
    ...toRefs(data),
    back
	}
}

export default orderDetailModel;