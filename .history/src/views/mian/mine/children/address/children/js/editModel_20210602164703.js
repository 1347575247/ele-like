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
    gender: '2',
    baseAddr: '',
    showArea: false,
    detailAddr: '',
    addrLabel: '未选择'
  });

  onMounted(() => {
    let nowEditItem = JSON.parse(getStore('needEditAddr'))
    data.username = nowEditItem.name
    data.mobile = nowEditItem.mobile
    data.baseAddr = nowEditItem.baseAddr
    data.detailAddr = nowEditItem.detailAddr
    data.addrLabel = nowEditItem.tag
    data.gender = nowEditItem.gender
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