import {getStore} from './deposit'
import {reactive, computed, toRefs} from 'vue'

export default function logintate() {
  const data = reactive({
    state: computed(() => {
      // localStorage有token就返回true
      return true ? getStore('token') : false
    })
  })

  return {
    ...toRefs(data)
  }
}

export default logintate
