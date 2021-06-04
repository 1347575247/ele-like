<template>
	<div class="order">
		<vHead title="订单已送达">
      <template v-slot:right>
        <div class="right">
          <div>
            <span class="iconfont icon-kefu"></span>
          </div>
          <span>客服</span>
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
  .right {
    display: flex;
    flex-direction: column;
  }
</style>
