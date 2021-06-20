/* 首页模块 */
import {getCurrentInstance,toRefs,reactive,onMounted,computed, watch} from 'vue'
function homeModel(){
	const {proxy}= getCurrentInstance();
	const data =reactive({
		show:{side:false},
		currentSide:'',
		foodType:null,
		saveSide(val){
			data.currentSide=val.name
			console.log(data.currentSide)
    }
	})
	
	/* 
		拆分分类的数据
		10条数据为一组
	 */
	const spliceFood=computed(()=>{
		// 获取到分类的数据
		var fooddatas=data.foodType;
		if(fooddatas){
			fooddatas=data.foodType;
			var arr=[];//存放切割的数据
			do{
				arr.push(fooddatas.splice(0,10))
				// arr.push(fooddatas.splice(0,8))
			}while(fooddatas.length)
			
			// console.log(arr)
			return arr;
		}
  })
	
	onMounted(()=>{
		/* 获取分类数据(首页轮播) */
		proxy.$axios('/v1/home/foodtype').then(res=>{
			// console.log(res)
			data.foodType=res.data
			// console.log(res.data)
    })
    
  })
  
  watch(() => data.foodType, (n, o) => {
    console.log(o, n)
  })

	return{
		spliceFood,
    ...toRefs(data),
	}
}

export default homeModel;