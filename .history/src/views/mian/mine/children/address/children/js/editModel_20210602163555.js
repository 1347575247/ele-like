import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import { areaList } from '@vant/area-data';
import {getStore, setStore} from '@/utils/deposit'

export default function addModel() {
  const $router = useRouter()

  // 表单相关数据
  const state = reactive({
    username: '',
    mobile: '',
    checked: '2',
    baseAddr: '',
    showArea: false,
    detailAddr: '',
    addrLabel: '未选择'
  });

  // 其他数据
  const data = reactive({
    nowEditItem: {}
  })

  onMounted(() => {
    data.nowEditItem = getStore('needEditAddr')
  })

  const onConfirm = (values) => {
    state.showArea = false;
    state.baseAddr = values
      .filter((item) => !!item)
      .map((item) => item.name)
      .join('/');
  };

  const onSubmit = (values) => {
    // console.log('submit', values);
    values.baseAddr = values.baseAddr.split('/').join('')
    let beforeAddrList = JSON.parse(getStore('address'))
    beforeAddrList.push(values)

    setStore('address', JSON.stringify(beforeAddrList))
  };


  return {
    state,
    onSubmit,
    onConfirm,
    areaList,
  }
}