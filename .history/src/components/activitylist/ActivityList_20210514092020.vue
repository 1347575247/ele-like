<template>
  <div class="insurrance-box" v-if="data.restaurant.activities">
    <div
      class="insure-item"
      v-for="(acItem, ac) in data.restaurant.activities"
      :key="ac"
    >
      <span
        class="icon"
        :style="{ backgroundColor: '#' + acItem.icon_color }"
        >{{ acItem.icon_name }}</span
      >
      <span class="sm-font t_ellipsis">{{ acItem.description }}</span>

      <div class="activity-num" v-if="ac === 0" @click="showActivityFn(i)" @enter.stop>
        <span>{{ data.restaurant.activities.length }}个活动</span>
        <!-- <span>0个活动</span> -->
        <span class="iconfont icon-xiala"></span>
      </div>
    </div>
    <div class="insure-item">
      <span class="icon">配</span>
      <span class="sm-font t_ellipsis">配送费立减3元</span>
    </div>
  </div>
</template>

<script>
import vHead from '@comps/header/Header.vue'
export default {
  props:{
    data: {
      type: Array
    }
  },
  components: {
    vHead,
  },
  setup(props, ctx) {
  }
}
</script>

<style lang='scss' scoped>
  .insurrance-box {
      margin-top: 0.326316rem;
      .insure-item {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:nth-child(n) {
          margin-top: 0.231579rem;
          .icon {
            background-color: lightgreen;
            border-radius: 3px;
          }
        }
        .icon {
          display: inline-block;
          padding: 0.082632rem;
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
</style>
