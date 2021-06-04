import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'
import {Dialog, Toast} from 'vant'
import {setStore, getStore} from '@/utils/deposit'

export default function AddrSelectModel() {
  const $router = useRouter()
  const data = reactive({
    show: {
    },
    /* 地址列表 */
    addressList: {}
  })

  onMounted(() => {
    data.addressList = JSON.parse(getStore('address'))
  })

  // 选中地址时将该地址保存到localStorage
  function selected(item) {
    setStore('nowAddr', JSON.stringify(item))
    // 成功提示
    Toast.success({
      message: '选择地址成功',
      iconSize: '60',
      duration: 1000,
    });
    
    $router.back()
  }

  function toAddressEdit(item) {
    setStore('needEditAddr', JSON.stringify(item))
    $router.push('/mine/address/edit')
  }
  
  function showDialog() {
    Dialog.confirm({
      title: '超出配送范围',
      message: '该地址与商家距离过远，需回首页重新选择商家',
    })
      .then(() => {
        // on confirm
        $router.push('/home')
      })
      .catch(() => {
        // on cancel
        
      });
  }
  return {
    ...toRefs(data),
    showDialog,
    toAddressEdit,
    selected
  }
}