<template>
  <div class="insurrance-box">
    <div
      class="insure-item"
      v-for="(acItem, ac) in item.restaurant.activities"
      :key="ac"
    >
      <span
        class="icon"
        :style="{ backgroundColor: '#' + acItem.icon_color }"
        >{{ acItem.icon_name }}</span
      >
      <span class="sm-font t_ellipsis">{{ acItem.description }}</span>

      <div class="activity-num" v-if="ac === 0" @click="showActivityFn(i)">
        <span>{{ item.restaurant.activities.length }}个活动</span>
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
  components: {
    vHead,
  },
}
</script>

<style></style>
