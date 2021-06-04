import {getCurrentInstance,toRefs,reactive,onMounted,computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {Dialog} from 'vant'

export default function AddrSelectModel() {
  const data = reactive({
    show: {
    }
  })

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
    showDialog
  }
}