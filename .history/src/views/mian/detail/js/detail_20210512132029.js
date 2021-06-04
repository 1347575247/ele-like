import {useRoute} from 'vue-router'
import {onMounted, reactive, getCurrentInstance} from 'vue'

function detailModel() {
  const $Route = useRoute()
  const {proxy} = getCurrentInstance()
  const data = reactive({
    id: $Route.query.id
  })

  const getDetailData = (id) => {
    proxy.$axios('/detail', {
      params: {id}
    }).then(res => {
      console.log(res)
    })
  }

  onMounted(() => {
    getDetailData(data.id)
  })

}


export default detailModel