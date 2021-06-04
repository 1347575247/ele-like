import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import { areaList } from '@vant/area-data';

export default function addModel() {
  const $router = useRouter()

  const state = reactive({
    username: '',
    mobile: '',
    checked: '0',
    baseAddr: '',
    showArea: false,
    detailAddr: ''
  });

  const onConfirm = (values) => {
    state.showArea = false;
    state.baseAddr = values
      .filter((item) => !!item)
      .map((item) => item.name)
      .join(' / ');
  };

  const onSubmit = (values) => {
    console.log('submit', values);
  };

  function back() {
    $router.back()
  }

  return {
    back,
    state,
    onSubmit,
    onConfirm,
    areaList,
  }
}