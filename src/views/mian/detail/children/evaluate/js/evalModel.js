import {useRoute} from 'vue-router'
import {onMounted, reactive, getCurrentInstance, computed, toRefs} from 'vue'
import {useStore} from 'vuex'
import {ImagePreview} from 'vant'


export default function evalModel() {
  const {proxy} = getCurrentInstance()
  const $Route = useRoute()
  const data = reactive({
    stars: 5,
    evaluate: {},
    id: $Route.query.id,
    image: {
      // 是否展示预览框
      imagePreviewShow: false,
      // 当前预览图片数组
      data: [],
      // 当前预览图片索引
      index: 0
    },
    evalText: v => {
      return v >= 4.5 ? {
        text: '超赞',
        color: '#ff731c'
      } : v >= 3.5 ? {
        text:'满意',
        color: 'rgb(255, 170, 12)'
      } : v >= 2.5 ? {
        text:'一般',
        color: 'rgb(255, 170, 12)'
      } : v >= 1.5 ? {
        text:'差',
        color: 'rgb(137, 159, 188)'
      } : {
        text: '非常差',
        color: 'rgb(137, 159, 188)'
      }
    },
    /** 评价图片预览
     * @v 图片数组
     */
    showPreview: (v,i) => {
      let r = v.map(item => {
        return proxy.$formatImgSrc(item.image_hash)
      })
      if(i !== 0) {
        let aheadArr = r.splice(i, r.length-i)
        r = [...aheadArr, ...r]
      }
      data.image.data = r
      data.image.index = i
      data.image.imagePreviewShow = true
    }
  })

  onMounted(() => {
    getComments(data.id)
  })

  function getComments(id) {
    proxy.$axios('/v1/detail/comments', {
      params: {id}
    }).then(res => {
      data.evaluate = res.data
      console.log(data.evaluate)
    })
  }

  // 预览图片的索引改变
  function onImgIndexChange(index) {
    data.image.index = index
  }

  // 关闭预览图片
  function onImagePrevClosed() {
    console.log(1)
    data.image.data = []
  }


  return {
    ...toRefs(data),
    onImgIndexChange,
    onImagePrevClosed
  }
}