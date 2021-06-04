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
    // 获取数据列表
    let addrList = JSON.parse(getStore('address'))
    // 过滤出我们需要修改的项索引
    const i = addrList.findIndex((item) => {
      return item.id === id
    })
    // 删除该项
    addrList.splice(i, 1)
    // 添加修改好的项
    values.id = i
    addrList.push(values)
    // 存储到localStorage
    setStore('address', JSON.stringify(addrList))

    // 成功提示
    Toast.success({
      message: '修改地址成功',
      iconSize: '60',

      // 关闭时让路由返回上一级
      onClose: () => {
        $router.back()
      }
    });
  };


  return {
    state,
    onSubmit,
    onConfirm,
    areaList,
  }
}