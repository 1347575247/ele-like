<template>
  <div class="good-list">
    <div class="good-item" v-for="(item, i) in elistData" :key="i">
      <div class="img-box">
        <img
          :src="$formatImgSrc(item.restaurant.image_path)"
          alt=""
        />
      </div>
      <div class="desc">
        <div class="title-box">
          <h2>{{item.restaurant.name}}</h2>
          <div class="feedback">
            <span class="iconfont iconxuanzekuang"></span>
            <span>...</span>
          </div>
        </div>
        <div class="star-box">
          <img :src="src" alt="" />
          <span class="">{{"月售"+item.restaurant.recent_order_num+"单"}}</span>
        </div>
        <div class="discount-box">
          <h2 class="sm-font t_ellipsis">￥{{item.restaurant.float_minimum_order_amount}}起送 | 配送￥{{item.restaurant.float_delivery_fee}}</h2>
          <h3 class="sm-font">4.81km | {{item.restaurant.order_lead_time}}分钟</h3>
        </div>
        <ul class="tag-list">
          <li class="cate sm-font" v-for="(tag, j) in item.restaurant.flavors" :key="j">
          {{tag.name}}
        </li>
        </ul>
        
        <div class="insurrance-box">
          <div class="insure-item">
            <span class="icon">保</span>
            <span class="sm-font t_ellipsis"
              >该商户食品安全已由国泰产险承担，食品安全有保障</span
            >

            <div class="activity-num">
              <span>3个活动</span>
              <span class="iconfont icon-xiala"></span>
          </div>
          </div>
          <div class="insure-item">
            <span class="icon">配</span>
            <span class="sm-font t_ellipsis">配送费立减3元</span>
          </div>
        </div>
      </div>
    </div>
    <slot>
			<p class="notice">加载中....</p>
			<p class="notice">没有更多了~</p>
		</slot>
    <div class="pad-for-bot"></div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import base64 from '@/assets/js/base64'
import { Rate } from 'vant'

const { imgSrc } = base64
export default {
  components: {
    [Rate.name]: Rate,
  },
  props: {
    elistData: {
      type: [Object],
    },
  },
  setup(props, context) {
    const base64Data = reactive({
      src: imgSrc,
    })
    return {
      ...toRefs(base64Data),
    }
  },
}
</script>

<style lang="scss" scoped>
.pad-for-bot {
  height: 1.473684rem;
}
.notice{
    text-align:center;
    line-height:0.746666rem;//28
}
.good-item {
  display: flex;
  height: 4.647368rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 0.605263rem;
  .img-box {
    height: 100%;
    width: 18.4%;
    img {
      width: 100%;
    }
  }
  .desc {
    width: auto;
    flex-grow: 1;
    padding: 0.131579rem 0 0 0.263158rem;
    .title-box {
      display: flex;
      justify-content: space-between;

      h2 {
        font-weight: bold;
        font-size: 0.394737rem;
      }

      // 反馈按钮
      .feedback {
        .iconxuanzekuang {
          font-size: 0.315789rem;
        }
        span {
          vertical-align: middle;
        }
        span:nth-child(2) {
          display: inline-block;
          margin-top: -0.252632rem;
        }
      }
    }
    // 星星区域
    .star-box {
      margin-top: 0.263158rem;
      img {
        width: 1.447368rem;
        vertical-align: middle;
      }
      span {
        margin-left: 0.157895rem;
        font-size: 0.293333rem;
        opacity: 0.6;
      }
    }
    .discount-box {
      width: 100%;
      position: relative;
      align-items: center;
      margin-top: 0.384737rem;
      h2 {
        display: inline-block;
        max-width: 3.947368rem;
      }
      h3 {
        display: inline-block;
        position: absolute;
        right: 0;
      }
    }
    .tag-list {
      display: flex;
      .cate {
        margin-top: 0.233158rem;
        padding: 0.052632rem 0.105263rem;

        font-size: 0.263158rem;
        border: 0.026316rem solid black;
        opacity: 0.3;
      }
    }
    
    .insurrance-box {
      margin-top: 0.326316rem;
      .insure-item {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:nth-child(2) {
          margin-top: 0.131579rem;
          .icon {
            background-color: lightgreen;
          }
        }
        .icon {
          display: inline-block;
          padding: 0.092632rem;
          color: #fff;
          background-color: rgb(102, 102, 102);
        }
        .sm-font {
          left: 0.826316rem;
          position: absolute;
          max-width: 4.842105rem;
        }
        .activity-num {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
