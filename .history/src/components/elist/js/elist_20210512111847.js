/* 首页模块 */
import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
function elistModel(){
	const {proxy}= getCurrentInstance();
	const data =reactive({
    vlist: null,
	})

  
  // 获取新数据
  const getNewElistData = (val) => {
    // 获取当前的数据索引与总数据条数
    const {offset, total} = val
    console.log(val)
    /* 获取商家列表 */
    proxy.$axios('/list', {
      params: {
        offset: offset,
        len: 8
      }
    }).then(res => {
      // console.log(res.data)
      data.vlist = {
        data: [...data.vlist.data, ...res.data.data],
        total: total
      }
      // console.log(data.vlist)
    })
  }
	
	onMounted(()=>{
    /* 获取商家列表 */
    proxy.$axios('/list', {
      params: {
        offset: 0,
        len: 8
      }
    }).then(res => {
      console.log(res.data)
      data.vlist = res.data
    })
	})
	return{
    ...toRefs(data),
    getNewElistData
	}
}

export default elistModel