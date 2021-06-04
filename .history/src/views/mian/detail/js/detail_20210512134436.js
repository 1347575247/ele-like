import {useRoute} from 'vue-router'
import {onMounted, reactive, getCurrentInstance} from 'vue'

function detailModel() {
  const $Route = useRoute()
  const {proxy} = getCurrentInstance()
  const data = reactive({
    id: $Route.query.id,
    detailData: null
  })

  const getDetailData = (id) => {
    proxy.$axios('/detail', {
      params: {id}
    }).then(res => {
      data.detailData = res.data
    })
  }

  onMounted(() => {
    getDetailData(data.id)
  })

}


export default detailModel