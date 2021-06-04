import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import { areaList } from '@vant/area-data';
import {getStore, setStore} from '@/utils/deposit'
import { nanoid } from 'nanoid'
import { Toast } from 'vant'

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
      .join('/');
  };

  const onSubmit = (values) => {
    // console.log('submit', values);
    values.baseAddr = values.baseAddr.split('/').join('')
    values.id = nanoid(10)
    let beforeAddrList = JSON.parse(getStore('address'))
    beforeAddrList.push(values)

    setStore('address', JSON.stringify(beforeAddrList))

    // 成功提示
    Toast.success({
      message: '添加地址成功'
    })
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