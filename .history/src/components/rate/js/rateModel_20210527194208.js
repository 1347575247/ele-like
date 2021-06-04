import {reactive, toRefs, computed} from 'vue'

export default function rateModel() {
  const data = reactive({
    rate: {
      store: {
        overall: 5,
        package: 0,
        quality: 0
      }
    },
   
  })
  // 根据星星数返回不同的对象
  const rateObj = computed(() => {
    let storeData =  data.rate.store
    let obj = {
      overall: '',
      package: '',
      quality: ''
    }
    Object.keys(obj).forEach(key => {
      obj[key] = storeData[key] >= 4.5 ? '超赞' : 
                 storeData[key] >= 3.5 ? '满意' :
                 storeData[key] >= 2.5 ? '一般' :
                 storeData[key] >= 1.5 ? '较差' :
                 '很差'
    })
    
    return obj
  })
  

  return {
    ...toRefs(data),
    rateObj
  }
}