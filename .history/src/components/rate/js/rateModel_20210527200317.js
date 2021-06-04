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

  function starChange(value, type) {
    console.log(value, type)
  }
   
  
  return {
    ...toRefs(data),
    starChange
  }
}