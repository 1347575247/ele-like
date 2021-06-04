import {reactive, toRefs, computed, watch} from 'vue'

export default function rateModel() {
  const data = reactive({
    rate: {
      store: {
        overall: 0,
        package: 0,
        quality: 0
      },
      delivery: 0
    },
    // 根据星星数返回不同的对象
    rateObj: {
        overall: {},
        package: {},
        quality: {}
      }
  })

  function overallChange(value) {
    data.rate.store.overall = value
    handleStarChange('overall', value)
  }

  function packageChange(value) {
    data.rate.store.package = value
    handleStarChange('package', value)
  }

  function qualityChange(value) {
    data.rate.store.quality = value
    handleStarChange('quality', value)
  }

  function handleStarChange(key, value) {
    let storeData =  data.rate.store
    data.rateObj[key] = 
            storeData[key] >= 4.5 ? {
              text: '超赞',
              class: 'good',
              color: '#ff731c'
            } : 
            storeData[key] >= 3.5 ? {
              text:'满意',
              class: 'soso',
              color: 'rgb(255, 170, 12)'
            }:
            storeData[key] >= 2.5 ? {
              text:'一般',
              class: 'soso',
              color: 'rgb(255, 170, 12)'
            } :
            storeData[key] >= 1.5 ? {
              text:'差',
              class: 'bad',
              color: 'rgb(137, 159, 188)'
            }: {
              text: '非常差',
              class: 'bad',
              color: 'rgb(137, 159, 188)'
            }
            
  }


  return {
    ...toRefs(data),
    overallChange,
    packageChange,
    qualityChange
  }
}