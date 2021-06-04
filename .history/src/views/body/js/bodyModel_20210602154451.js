import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {getStore, setStore} from '@/utils/deposit'


export default function bodyModel() {
  // 初始化地址列表
  let initAddressList = [
    {
      baseAddr: '尚品铂家酒店(挂绿广场瑞祥店)',
      detailAddr: '3楼332房',
      name: '蔡历史',
      mobile: '12365329753',
      tag: '家'
    },
    {
      baseAddr: '广州市增城区挂绿广场',
      detailAddr: '3楼332房',
      name: '陈某',
      mobile: '13228752053',
      tag: '公司'
    },
    {
      baseAddr: '北京市北京大学',
      detailAddr: 'A2栋-1419',
      name: '唐申述',
      mobile: '12584912032',
      tag: '学校'
    },
  ]

  let addrVal = JSON.stringify(initAddressList)

  onMounted(() => {
    setStore('address', addrVal)
  })
  
}