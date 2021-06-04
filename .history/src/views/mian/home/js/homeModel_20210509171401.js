/* 首页模块 */
import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
function homeModel(){
	const {proxy}= getCurrentInstance();
	const data =reactive({
		show:{side:false},
		currentSide:'',
		foodType:null,
		saveSide(val){
			data.currentSide=val.name
			console.log(data.currentSide)
    },
    vlist: null,
    getNewElistData: () => {}
	})
	
	/* 
		拆分分类的数据
		10条数据为一组
	 */
	const spliceFood=computed(()=>{
		// 获取到分类的数据
		var fooddatas=data.foodType;
		if(fooddatas){
			fooddatas=data.foodType.entries;
			var arr=[];//存放切割的数据
			do{
				arr.push(fooddatas.splice(0,10))
				// arr.push(fooddatas.splice(0,8))
			}while(fooddatas.length)
			
			// console.log(arr)
			return arr;
		}
  })
  
  // 获取新数据
  const getNewElistData = (val) => {
    // 获取当前的数据索引与总数据条数
    const {offset, total} = val
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
  }
	
	onMounted(()=>{
		/* 获取分类数据(首页轮播) */
		proxy.$axios('/foodtype').then(res=>{
			// console.log(res)
			data.foodType=res.data
			// console.log(res.data)
    })
    
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
		spliceFood,
		...toRefs(data)
	}
}

export default homeModel;