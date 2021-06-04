import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import { areaList } from '@vant/area-data';
import {getStore, setStore} from '@/utils/deposit'

export default function addModel() {
  const $router = useRouter()

  // 表单相关数据
  const state = reactive({
    id:'',
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
    state.username = nowEditItem.name
    state.mobile = nowEditItem.mobile
    state.baseAddr = nowEditItem.baseAddr
    state.detailAddr = nowEditItem.detailAddr
    state.addrLabel = nowEditItem.tag
    state.gender = nowEditItem.gender
    state.id = nowEditItem.id
  })

  const onConfirm = (values) => {
    state.showArea = false;
    state.baseAddr = values
      .filter((item) => !!item)
      .map((item) => item.name)
      .join('/');
  };

  const onSubmit = (values, id) => {
    console.log('submit', values);
    values.baseAddr = values.baseAddr.split('/').join('')
    let beforeAddrList = JSON.parse(getStore('address'))
    const i = beforeAddrList.find((item) => {
      return item.id === id
    })
    console.log(i)
    // console.log(beforeAddrList)
    // beforeAddrList.push(values)

    // setStore('address', JSON.stringify(beforeAddrList))
  };


  return {
    state,
    onSubmit,
    onConfirm,
    areaList,
  }
}