import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {getStore, setStore, removeStore } from '@/utils/deposit'
import { Toast } from 'vant'

export default function infoModel() {

  // 退出登录
  function logout() {
    removeStore('token')
  }
  return {
    logout
  }
}