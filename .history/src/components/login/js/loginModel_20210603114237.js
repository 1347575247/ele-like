import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {getStore, setStore} from '@/utils/deposit'

export default function loginModel() {

  const state = reactive({
    username: '',
    password: '',
  });
  const onSubmit = (values) => {
    console.log('submit', values);
    let nowAccounts = JSON.parse(getStore('initAccount'))
    nowAccounts.forEach(item => {
      if(item.username === values.username && item.password === values.password) {
        setStore('token', '1')
        return
      }
    })
  };

  return {
    state,
    onSubmit
  }
}