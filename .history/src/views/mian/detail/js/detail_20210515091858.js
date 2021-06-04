import {useRoute} from 'vue-router'
import {onMounted, reactive, getCurrentInstance, computed, toRefs} from 'vue'
import {useStore} from 'vuex'

function detailModel() {
  const $Route = useRoute()
  const $store = useStore()
  const {proxy} = getCurrentInstance()
  const data = reactive({
    id: $Route.query.id,
    detailData: null,
    show: { // 控制优惠卷和活动弹出层是否显示
      coupon: false,
      activity: false,
    }
  })

  const getDetailData = (id) => {
    proxy.$axios('/detail', {
      params: {id}
    }).then(res => {
      $store.commit('detail/initDetailData',res.data)
      // console.log(rst)
      console.log(redpack)
    })
  }

  const rst = computed(() => {
    return $store.getters['detail/rst']
  })
  const redpack = computed(() => {
    return $store.getters['detail/redpack']
  })
  

  

  onMounted(() => {
    getDetailData(data.id)
  })

  return {
    rst,
    redpack,
    ...toRefs(data)
  }
}


export default detailModel