import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {getStore, setStore} from '@/utils/deposit'

export default function loginModel() {
  const $router = useRouter()
  const $route = useRoute()
  function toLoginPage() {
    $router.push('/login?redirect='+ $route.query.redirect)
  }
  return {
    toLoginPage
  }
}