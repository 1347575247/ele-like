import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import { areaList } from '@vant/area-data';
import {getStore, setStore} from '@/utils/deposit'

export default function addModel() {
  const $router = useRouter()

  const state = reactive({
    username: '',
    mobile: '',
    checked: '2',
    baseAddr: '',
    showArea: false,
    detailAddr: '',
    addrLabel: '未选择'
  });

  const onConfirm = (values) => {
    state.showArea = false;
    state.baseAddr = values
      .filter((item) => !!item)
      .map((item) => item.name)
      .join(' / ');
  };

  const onSubmit = (values) => {
    // console.log('submit', values);
    if(values) {
      values.baseAddr = values.baseAddr.split('/').join('')
      console.log(values)
    }
    
    
    let beforeAddrList = JSON.parse(getStore('address'))
    beforeAddrList.push(values)

    // setStore('address', JSON.stringify(beforeAddrList))
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