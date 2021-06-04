import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {useStore} from 'vuex'
import { areaList } from '@vant/area-data';
import {getStore, setStore} from '@/utils/deposit'

export default function editModel() {

  const data = reactive({
    nowItem: {}
  })

  onMounted(() => {
    data.nowItem = getStore('needEditAddr')
  })

  return {
    ...toRefs(data),
    areaList
  }
}