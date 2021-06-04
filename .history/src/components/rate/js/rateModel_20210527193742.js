import {reactive, toRefs, computed} from 'vue'

export default function rateModel() {
  const data = reactive({
    rate: {
      store: {
        overall: 0,
        package: 0,
        quality: 0
      }
    },
   
  })
  // 根据星星数返回不同的对象
  const rateObj = computed(() => {
    let storeData =  data.rate.store
    console.log(storeData)
    let obj = {
      overall: '',
      package: '',
      quality: ''
    }
    
    return obj
  })
  

  return {
    ...toRefs(data),
    rateObj
  }
}