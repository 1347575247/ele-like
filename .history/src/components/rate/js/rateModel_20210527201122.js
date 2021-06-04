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

  function overallChange(value) {
    handleStarChange('overall', value)
  }

  function handleStarChange(key, value) {
    let storeData =  data.rate.store
    data.rateObj[key] = 
            storeData[key] >= 4.5 ? '超赞' : 
            storeData[key] >= 3.5 ? '满意' :
            storeData[key] >= 2.5 ? '一般' :
            storeData[key] >= 1.5 ? '较差' :
            '很差'
    console.log(data.rate.store)
  }
   
  // watch(() => data.rate.store,() => {
  //   let storeData =  data.rate.store

  //   Object.keys(data.rateObj).forEach(key => {
      // data.rateObj[key] = 
      //       storeData[key] >= 4.5 ? '超赞' : 
      //       storeData[key] >= 3.5 ? '满意' :
      //       storeData[key] >= 2.5 ? '一般' :
      //       storeData[key] >= 1.5 ? '较差' :
      //       '很差'
  //   })
  // }, {
  //   immediate: true,
  //   deep: true
  // })


  return {
    ...toRefs(data),
    overallChange
  }
}