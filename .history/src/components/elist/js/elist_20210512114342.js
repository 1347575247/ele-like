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


    const scrollFn = (e) => {
      data.st=_html.scrollTop || _body.scrollTop;
      data.st = Math.ceil(data.st)
      data.ct=_html.clientHeight || _body.clientHeight
      data.sh=_html.scrollHeight || _body.scrollHeight

      let len = 8,
          offset = 0;
      // console.log(data.st, data.ct, _html.scrollHeight)
      if(data.st + data.ct >= data.sh) {
        console.log("我滑到底部了")
        offset += len
        getNewElistData(offset, len, res => {
          data.elistData = {
            data: [...data.elistData.data, ...res.data.data],
          }
          console.log(data.elistData)
        })
      }
    }
    
    const _html = document.documentElement
    const _body = document.body
    
    window.addEventListener('scroll', scrollFn, false)
    _html.addEventListener('scroll', scrollFn, false)
    _body.addEventListener('scroll', scrollFn, false)
  })
  
  const itemData = computed(() => {
    return data.elistData? data.elistData : null
  })
	return{
    ...toRefs(data),
    getNewElistData
	}
}

export default elistModel