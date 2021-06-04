import {useRoute} from 'vue-router'
import {onMounted, reactive, getCurrentInstance, computed} from 'vue'
import {useStore} from 'vuex'

function detailModel() {
  const $Route = useRoute()
  const $store = useStore()
  const {proxy} = getCurrentInstance()
  const data = reactive({
    id: $Route.query.id,
    detailData: null
  })

  const getDetailData = (id) => {
    proxy.$axios('/detail', {
      params: {id}
    }).then(res => {
      $store.commit('detail/initDetailData',res.data)
    })
  }

  const rst = computed(() => {
    console.log($store.getters['detail/rst'])
    return $store.getters.detail.rst
  })

  

  onMounted(() => {
    getDetailData(data.id)
  })

  return {
    rst
  }
}


export default detailModel