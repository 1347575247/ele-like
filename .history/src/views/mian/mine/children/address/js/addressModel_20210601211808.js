import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'

export default function addressModel() {
  const $router = useRouter()

  function back() {
    $router.back()
  }

  function toAddressAdd() {
    $router.push('/mine/address/add')
  }

  return {
    back,
    toAddressAdd
  }
}