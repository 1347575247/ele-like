import {reactive, computed, toRefs} from 'vue'
import {getSession} from '@/utils/deposit'

export default function personModel() {
  const data = reactive({
    // 用户个人信息
    personInfo: computed(() => {
      if(getSession('user')) {
        return JSON.parse(getSession('user'))
      }else {
        return {}
      }
    }),
    secretMobile: (mobile) => {
      // 13226752974 ===> 132****2974
      let res = mobile.substring(0,3) + '****' + mobile.substring(7,12)
      return res
     }
  })


  return {
    ...toRefs(data)
  }
}