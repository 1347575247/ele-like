import {reactive, toRefs, computed, watch} from 'vue'

export default function rateModel() {
  const data = reactive({
    rate: {
      store: {
        overall: 0,
        package: 0,
        quality: 0
      },
      // 骑士数据
      delivery: {
        activeIndex: 0, // 默认评价
        comments: [
          '送餐快', '餐品完好', '服务态度好',
          '准时到达', '穿着专业', '衣着整洁',
        ]
      }
    },
    // 根据星星数返回不同的对象
    rateObj: {
        overall: {},
        package: {},
        quality: {}
      }
  })

  // 设置骑士标签样式
  function addComment(e) {
    console.log(e.target)
    // 不是差评的样式
    if(data.rate.delivery.activeIndex != 0) {
      console.log(1)
      e.target.style = {
        backgroundColor: '#fff2ea',
        borderColor: '#ff731c',
        color: '#ff731c'
      }
    }else {
      console.log(2)
      e.target.style = {
        backgroundColor: '#e7ecf2',
        borderColor: '#9aadc5',
        color: '#95a5c3'
      }
    }
  }

  // 设置当前配送评价索引
  function deliverRate(index) {
    const delivery = data.rate.delivery
    delivery['activeIndex'] = index
  }

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
    qualityChange,
    deliverRate,
    addComment
  }
}