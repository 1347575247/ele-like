import {reactive, computed, toRefs, onMounted} from 'vue'


export default function benefitModel() {
  const data = reactive({
    active: ''
  })

  return {
    ...toRefs(data)
  }
}