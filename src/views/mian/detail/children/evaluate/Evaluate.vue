<template>
  <div class="evaluate p-spacing">
    <ul class="top-eval">
      <li class="index-item active">
        <span>全部</span>
        <span class="num">302</span>
      </li>
      <li class="index-item">
        <span>最新</span>
        <span class="num">302</span>
      </li>
      <li class="index-item">
        <span>好评</span>
        <span class="num">302</span>
      </li>
      <li class="index-item bad">
        <span>近期差评</span>
        <span class="num">1</span>
      </li>
      <li class="index-item">
        <span>有图/视频</span>
        <span class="num">51</span>
      </li>
    </ul>

    <p class="only-content">
      <span class="iconfont icon-duigou"></span>
      <span>只看有内容的评价</span>
    </p>

    <ul class="eval-list" v-if="evaluate">
      <li class="eval-item clearFixed" v-for="(item, i) in evaluate.comments" :key="i">
        <div class="left">
          <span :class="item.avatar ? '' : 'anonymous'" :style="{backgroundImage:item.avatar && 'url('+ $formatImgSrc(item.avatar) +')'}"></span>
        </div>
        <div class="right">
          <div class="name">
            <span>{{item.username}}</span>
            <span class="date">2021-05-16</span>
          </div>
          <div class="rate">
            <van-rate v-model="item.rating" readonly allow-half color="rgb(255, 210, 30)" size="8px" gutter="6px"/>
            <span class="r-text" :style="{color: evalText(item.rating).color}">{{evalText(item.rating).text}}</span>
          </div>
          <p class="rate-text">
            {{item.rating_text}}
          </p>
          <div class="reply-box">
            <span>商家回复：</span>
            <span>{{item.reply.content}}</span>
          </div>
          <div class="image-box" v-if="item.order_images.length">
            <div class="rate-img">
              <img :src="$formatImgSrc(imgItem.image_hash)" alt="" v-for="(imgItem, i) in item.order_images" :key="i" @click="showPreview(item.order_images, i)">
            </div>
          </div>
        </div>
      </li>
    </ul>

    <van-image-preview
      v-model:show="image.imagePreviewShow"
      :images="image.data"
      @change="onImgIndexChange"
      @close="onImagePrevClosed"
    >
      <template v-slot:index>第{{ image.index }}页</template>
    </van-image-preview>
  </div>
</template>

<script>
import evalModel from './js/evalModel'
export default {
  
  setup(props, ctx) {
    const {stars, evaluate, evalText, showPreview, onImgIndexChange, image, onImagePrevClosed} = evalModel()
    return {
      stars,
      evaluate,
      evalText,
      showPreview,
      onImgIndexChange,
      image,
      onImagePrevClosed
    }
  }
}
</script>
<style lang="scss">
  .van-image-preview {
    img {
      width: 100%;
    }
  }
</style>
<style lang='scss' scoped>

  .top-eval {
    display: flex;
    flex-wrap: wrap;
    margin-top:0.210526rem;
    
    .index-item {
      padding: 0.263158rem;
      margin-right: 0.210526rem;
      border-radius: 0.131579rem;
      background-color:#ebf5ff;
      color: #6d7885;
      margin-top:0.105263rem;
      .num {
        margin-left: 0.105263rem;
      }
      &.active {
        background-color:#0097ff;
        color: #fff;
      }
      &.bad {
        background-color:#f5f5f5;
        color: #aaa;
      }
    }
  }

  .only-content {
    margin: 0.657895rem 0;
    .icon-duigou {
      color: #76d572;
      margin-right: 0.078947rem;
    }
    span {
      vertical-align: middle;
    }
  }

  .eval-list {
    padding-bottom: 2.105263rem; //80
    .eval-item {
      position: relative;
      margin-top: 1.184211rem;
      
      .left {
        display: inline-block;
        width: 10%;
        height: 0.947368rem;
        overflow: hidden;
        position: relative;
        vertical-align: top;
        span {
          display: inline-block;
          width: 0.947368rem;
          border-radius: 50%;
          height: 0.947368rem;
          background-size: cover;
          background-position:0 177px;
          &.anonymous {
            background-image: url("@/assets/head-undefined.png")
          }
        }
      }
      .right {
        width: 87%;
        margin-left: 0.210526rem;
        margin-top: 0.078947rem;
        display: inline-block;
        .name {
          .date {
            position: absolute;
            right: 0;
            top: 0;
            transform: scale(0.9);
            opacity: .5;
          }
        }
        .rate {
          margin-top: 0.205263rem;
          .van-rate {
            transform: scale(.8);
            margin-left: -0.184211rem;
          }
          .r-text {
            margin-left: 0.236842rem; // 9
            vertical-align: top;
            color:rgb(255, 96, 0);
          }
          
        }
        .rate-text {
          margin-top: 0.263158rem;
          font-size: 0.394737rem;
        }
        .reply-box {
          padding: 0.315789rem;
          font-size: 0.368421rem;
          background-color:#f3f3f3;
          position: relative;
          margin-top: 0.394737rem;
          letter-spacing: 0.026316rem;
          // 三角图标
          &::before {
            content: "";
            width: 0;
            height: 0;
            position: absolute;
            top: -0.635789rem;
            border: 0.333158rem solid transparent;
            border-bottom: 0.333158rem solid #f3f3f3;
          }
        }
        .image-box {
          margin-top: 0.210526rem; // 8
          .rate-img {
            img {
              width: 3.947368rem;
              height: 3.947368rem; // 150
              &:nth-child(2n+1) {
                margin-right: 0.184211rem;
                margin-bottom: 0.184211rem;
              }
            }
            
            
          }
        }
      }
    }
  }
</style>