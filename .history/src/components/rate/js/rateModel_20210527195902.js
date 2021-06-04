import {reactive, toRefs, computed, watch} from 'vue'

export default function rateModel() {
  const data = reactive({
    rate: {
      store: {
        overall: 0,
        package: 0,
        quality: 0
      }
    },
    // 根据星星数返回不同的对象
    rateObj: {

        overall: '',
        package: '',
        quality: ''
      }
  })
   
  watch(() => data.rate.store,() => {
    console.log(data.rate)
    let storeData =  data.rate.store
    let rateObj = data.rate.rateObj
    Object.keys(rateObj).forEach(key => {
      data.rate.rateObj[key] = 
            storeData[key] >= 4.5 ? '超赞' : 
            storeData[key] >= 3.5 ? '满意' :
            storeData[key] >= 2.5 ? '一般' :
            storeData[key] >= 1.5 ? '较差' :
            '很差'
    })
  }, {
    immediate: true,
    deep: true
  })


  return {
    ...toRefs(data),
  }
}