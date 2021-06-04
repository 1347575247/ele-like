import {reactive, toRefs} from 'vue'

export default function rateModel() {
  const data = reactive({
    rate: {
      store: {
        overall: 0,
        package: 0,
        quality: 0
      }
    }
  })

  return {
    ...toRefs(data)
  }
}