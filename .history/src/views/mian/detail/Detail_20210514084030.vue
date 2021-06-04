<template>
  <div class="detail" v-if="rst">
    <!-- 头部 -->
    <div class="detail_header">
      <button class="header_btn">&lt;</button>
      <div class="header_logo"><img src="" alt="" /></div>
    </div>
    <!-- 描述部分 start-->
    <div class="detail_desc">
      <!-- 店铺名 -->
      <h2 class="desc_title">粥可温</h2>
      <!-- 评价、月售、配送约 -->
      <div class="desc_evaluate">
        <span>评价555分</span> <span>月售222单</span> <span>配送约30分钟</span>
      </div>
      <!-- 优惠劵 -->
      <div class="desc_coupon">
        <div class="coupon_main">
          <div class="coupon_item flex type0">
            <span class="mian_value">￥8</span>
            <span class="mian_detail">无门槛</span>
            <span class="mian_btn">领取</span>
          </div>
        </div>
      </div>
      <!-- 活动 -->
      <div class="desc_activity">
        <div class="activity_main flex">
          满减
          <div class="activity_more">
            共26个优惠<i class="iconfont iconxiala"></i>
          </div>
        </div>
      </div>
      <!-- 公告 -->
      <div class="desc_notice t_ellipsis">粥可温................</div>
    </div>
    <!-- 描述部分 end-->
    <!-- 主体内容 -->
    <div class="detail_main">
      <!-- 导航 -->
      <nav class="main_nav flex" v-fixed ref="detail_nav">  
        <div class="nav_item">点餐</div>
      </nav>
            
    </div>
  </div>
</template>

<script>
import detailModel from './js/detail.js'
export default {
  setup(props, ctx) {
    const { rst } = detailModel()
    return {
      rst,
    }
  },
}
</script>

<style></style>
