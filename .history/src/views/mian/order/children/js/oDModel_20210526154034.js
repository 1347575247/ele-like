/* 首页模块 */
import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
function homeModel(){
	const {proxy}= getCurrentInstance();
	const data =reactive({
		progressShow: true
	})
	return{
    ...toRefs(data),
	}
}

export default homeModel;