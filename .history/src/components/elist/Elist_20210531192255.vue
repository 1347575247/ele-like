<template>
  <div class="good-list" v-if="itemData">
    <div class="good-item" v-for="(item, i) in itemData.data" :key="i" :style="showActive(i)" @click="toDetail(item)">
      <div class="img-box">
        <img
          :src="$formatImgSrc(item.restaurant.image_path)"
          alt=""
        />
        {{item.restaurant.specfoods[0].food_id}}
        <span class="img_arror">1</span>
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
          <van-rate v-model="item.restaurant.rating" allow-half readonly size=9 color="#ffd21e"/> 
          <span class="">{{"月售"+item.restaurant.recent_order_num+"单"}}</span>
        </div>
        <div class="discount-box">
          <h2 class="sm-font t_ellipsis">￥{{item.restaurant.float_minimum_order_amount}}起送 | 配送￥{{item.restaurant.float_delivery_fee}}</h2>
          <h3 class="sm-font">{{calDistance(item.restaurant.latitude, item.restaurant.longitude)}} | {{item.restaurant.order_lead_time}}分钟</h3>
        </div>
        <ul class="tag-list">
          <li class="cate sm-font" v-for="(tag, j) in item.restaurant.flavors" :key="j">
          {{tag.name}}
        </li>
        </ul>

        <ActivityList :activities="item.restaurant.activities" class="activity-list" :style="showActive(i)"></ActivityList>
        <div class="activity-num" @click.stop="showActivityFn(i)">
          <span>{{ item.restaurant.activities.length }}个活动</span>
          <span class="iconfont icon-xiala"></span>
        </div>
        
        <!-- <div class="insurrance-box">
          <div class="insure-item">
            <span class="icon">保</span>
            <span class="sm-font t_ellipsis"
              >该商户食品安全已由国泰产险承担，食品安全有保障</span
            >

            <div class="activity-num">
              <span>{{item.restaurant.activities.length}}个活动</span>
              <span class="iconfont icon-xiala"></span>
          </div>
          </div>
          <div class="insure-item">
            <span class="icon">配</span>
            <span class="sm-font t_ellipsis">配送费立减3元</span>
          </div>
        </div> -->
      </div>
    </div>
    <slot>
      <!-- <p class="notice">加载中....</p> -->
      <p class="notice">没有更多了~</p>
    </slot>
    <div class="pad-for-bot"></div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watchEffect, getCurrentInstance } from 'vue'
import { Rate, Icon } from 'vant'
import elistModel from './js/elist.js'
import ActivityList from '@comps/activitylist/ActivityList.vue'

export default {
  components: {
    [Rate.name]: Rate,
    [Icon.name]: Icon,
    ActivityList
  },
  setup(props, context) {
    const {getNewElistData, itemData, calDistance, showActivityFn, showActive, toDetail} = elistModel()
    return {
      calDistance,
      itemData,
      showActive,
      showActivityFn,
      toDetail
    }
  },
}
</script>
<style lang="scss">
  .van-rate__icon--half {
    position: absolute;
  }
</style>
<style lang="scss" scoped>
.activity-list {
  height:  2.126316rem
}
.pad-for-bot {
  height: 1.473684rem;
}
.notice{
    text-align:center;
    line-height:0.746666rem;//28
}
.good-item {
  display: flex;
  height: 4.847368rem;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 0.605263rem;
  padding-bottom: 0.526316rem;
  .img-box {
    position: relative;
    height: 100%;
    width: 18.4%;
    overflow: visible;
    img {
      width: 100%;
    }
    .img_arror{
      position:absolute;
      right:-0.133333rem;//5
      top:-0.133333rem;
      background-image:linear-gradient(0deg,#FB7474,#C92020);
      color:#fff;
      font-size:0.226666rem;//16
      padding:0.036666rem 0.0943333rem;//4 8
      border-radius:0.8rem;//30
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
  }
  .activity-num{
    position:absolute;
    right: 0;
    top: 3.111579rem;
  }
}

.insure-item {
  span:nth-child(2) {
    margin-left: 20px;
  }
}


</style>
