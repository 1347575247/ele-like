import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'

export default function mineModel() {

  const $router = useRouter()

  function toAddress() {
    $router.push('/mine/address')
  }

  return {
    toAddress,
  }
}