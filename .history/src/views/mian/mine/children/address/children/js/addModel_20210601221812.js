import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'

export default function addModel() {
  const $router = useRouter()

  const state = reactive({
    username: '',
    mobile: '',
    checked: '1'
  });
  const onSubmit = (values) => {
    console.log('submit', values);
  };

  function back() {
    $router.back()
  }

  return {
    back,
    state,
    onSubmit
  }
}