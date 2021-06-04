import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {getStore, setStore} from '@/utils/deposit'

export default function loginModel() {
  const $router = useRouter()
  const $route = useRoute()
  const state = reactive({
    username: '',
    password: '',
  });
  const onSubmit = (values) => {
    // console.log('submit', values);
    let nowAccounts = JSON.parse(getStore('accounts'))
    // console.log(nowAccounts)
    nowAccounts.forEach(item => {
      if(item.username === values.username && item.password === values.password) {
        setStore('token', '1')

        // 即将回调到用户初始点击的那
        let redirectUrl = $route.query.redirect
        if(redirectUrl) {
          $router.push(redirectUrl)
        }else {
          $router.push('/home')
        }
        // 停止循环
        return
      }
    })
  };

  return {
    state,
    onSubmit
  }
}