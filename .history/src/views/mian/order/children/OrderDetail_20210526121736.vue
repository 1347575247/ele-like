<template>
	<div class="order-detail">
		<vHead title="订单已送达">
      <template v-slot:right>
        <div class="right">
          <span class="iconfont icon-kefu"></span>
        </div>
      </template>
    </vHead>
		
	</div>
</template>

<script>
  import vHead from '@comps/header/Header.vue'
	export default{
		components:{
      vHead,
		}
	}
</script>

<style lang="scss" scoped="scoped">
  .order-detail {
    background-image: linear-gradient(
      180deg
      ,hsla(0,0%,96.1%,0) 0,hsla(0,0%,96.1%,0) 27.466666666667vw,#f5f5f5 54.933333333333vw,#f5f5f5);
  }
  .header {
    background: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%) no-repeat;
    .title {
      font-weight: 700;
    }
  }
</style>
