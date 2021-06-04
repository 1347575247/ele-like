import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {getStore, setStore, removeStore } from '@/utils/deposit'
import { Toast, Dialog } from 'vant'

export default function infoModel() {
  const $router = useRouter()

  // 退出登录
  function logout() {
    Dialog.confirm({
      title: '退出登录',
      message: '你确定要退出登录吗?'
    }).then(() => {
      removeStore('token')
      $router.push('/mine')
    }).catch(() => {
      Toast('取消退出登录')
    })
  }
  return {
    logout
  }
}