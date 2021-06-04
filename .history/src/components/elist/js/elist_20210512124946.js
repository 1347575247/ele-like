/* 首页模块 */
import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter} from 'vue-router'

function elistModel(){
  const {proxy}= getCurrentInstance();
  const $router = useRouter
	const data =reactive({
    elistData: null,
    /* 当前用户所在位置 */
    gps:{
      latitude: 28.242478,//纬度
      longitude: 112.946747//经度
    },
    st: 0, // scrollTop
    ct: 0, // clientHeight,
    show_activity_state: {},
	})

  // 改变列表选择的状态
	function showActivityFn(i){
		data.show_activity_state[i]=!data.show_activity_state[i]
		// console.log(data.show_activity_state)
	}
	// 是否展开/隐藏活动列表
	function showActive(i){
	   var val=	data.show_activity_state[i];
	   
	   val=val?'auto':'';
	   
	   return{height:val}
  }
  
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

  /* 计算商家与用户的距离 */
  const calDistance = (lat, lont) => {
    /* 获取用户的经纬度 */
    const _lat = data.gps.latitude,
          _lont= data.gps.longitude
    
    let x, y, z
    x = _lat - lat
    y = _lont - lont

    /* 计算用户与商家的距离 */
    z = Math.sqrt(x*x + y*y)

    /* 转化为公里 */
    return (z*100).toFixed(2) + 'km'
  }
  
	
	onMounted(()=>{
    /* 获取商家列表 */
    getNewElistData(0, 8, res => {
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
    calDistance,
    itemData,
    getNewElistData,
    showActivityFn,
    showActive,
    $router
	}
}

export default elistModel