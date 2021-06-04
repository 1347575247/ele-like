import {reactive, computed, toRefs, onMounted, watch} from 'vue'


export default function benefitModel() {
  const data = reactive({
    active: ''
  })

  watch(() => data.active, (n, o) => {
    console.log(o, n)
  })

  return {
    ...toRefs(data)
  }
}