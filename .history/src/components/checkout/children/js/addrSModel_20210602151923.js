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
    Dialog.alert({
      title: '标题',
      message: '弹窗内容',
      theme: 'round-button',
    }).then(() => {
      // on close
    });
  }
  return {
    ...toRefs(data),
    showDialog
  }
}