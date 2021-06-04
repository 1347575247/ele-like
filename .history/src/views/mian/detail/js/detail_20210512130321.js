import {useRoute} from 'vue-router'
import {onMounted, reactive} from 'vue'

function detailModel() {
  const $Route = useRoute()
  const data = reactive({
    id: $Route.query.id
  })

  onMounted(() => {

  })

}


export default detailModel