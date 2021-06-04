<template>
  <div class="insurrance-box" v-if="activities">
    <div
      class="insure-item"
      v-for="(acItem, ac) in activities"
      :key="ac"
    >
      <span
        class="icon"
        :style="{ backgroundColor: '#' + acItem.icon_color }"
        >{{ acItem.icon_name }}</span
      >
      <span class="sm-font t_ellipsis">{{ acItem.description }}</span>

      
    </div>
  </div>
</template>

<script>
import vHead from '@comps/header/Header.vue'
export default {
  props:{
    activities: {
      type: Array
    },
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
        justify-content: space-between;
        align-items: center;
        &:nth-child(n) {
          margin-top: 0.231579rem;
          .icon {
            background-color: lightgreen;
            border-radius: 3px;
          }
        }
        span:nth-child(2) {
          margin-left: 0.263158rem;
          margin-top: 0.049316rem;
        }
        .icon {
          display: inline-block;
          padding: 0.082632rem;
          color: #fff;
          background-color: rgb(102, 102, 102);
        }
        .sm-font {
          left: 0.426316rem;
          position: absolute;
          max-width: 4.842105rem;
        }
        .activity-num {
          opacity: 0.5;
        }
      }
    }
</style>
