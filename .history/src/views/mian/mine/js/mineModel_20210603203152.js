import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {getSession} from '@/utils/deposit'

export default function mineModel() {

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
      console.log(mobile.split('').splice(3, 7, '****'))
      return mobile.split('').splice(3, 7, '****').join('')
    }
  })

  const $router = useRouter()

  function toAddress() {
    $router.push('/mine/address')
  }

  return {
    toAddress,
    ...toRefs(data)
  }
}