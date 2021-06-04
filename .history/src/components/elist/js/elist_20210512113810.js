/* 首页模块 */
import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
function elistModel(){
	const {proxy}= getCurrentInstance();
	const data =reactive({
    elistData: [],
    /* 当前用户所在位置 */
    gps:{
      latitude: 28.242478,//纬度
      longitude: 112.946747//经度
    },
    st: 0, // scrollTop
    ct: 0, // clientHeight
	})

  
  // 获取新数据
  const getNewElistData = (offset, len, cb) => {
    /* 获取商家列表 */
    proxy.$axios('/list', {
      params: {
        offset: offset, // 当前数据索引
        len: len  // 获取数据长度
      }
    }).then(cb)
  }
	
	onMounted(()=>{
    /* 获取商家列表 */
    proxy.$axios('/list', {
      params: {
        offset: 0,
        len: 8
      }
    }).then(res => {
      // console.log(res.data)
      data.elistData = res.data
    })
	})
	return{
    ...toRefs(data),
    getNewElistData
	}
}

export default elistModel