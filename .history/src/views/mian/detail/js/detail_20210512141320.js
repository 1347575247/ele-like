import {useRoute} from 'vue-router'
import {onMounted, reactive, getCurrentInstance} from 'vue'
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

  onMounted(() => {
    getDetailData(data.id)
  })

}


export default detailModel