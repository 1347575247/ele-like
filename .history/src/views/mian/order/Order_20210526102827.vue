<template>
	<div class="order">
		<vHead title="订单"></vHead>
    <ul class="order-list">
      <li class="item">
        <div class="shop">a</div>
        <div class="desc">b</div>
        <div class="operator">c</div>
      </li>
    </ul>
		
	</div>
</template>

<script>
	import vHead from '@comps/header/Header.vue'
	export default{
		components:{
			vHead
		}
	}
</script>

<style lang="scss" scoped>
  .order {
    background: #f5f4f4;
    height: 100%;
    position: absolute;
    width: 100%;
  }
    .item {
      height: 4.342105rem;
      margin: 0.263158rem 0;
      background: #fff;
      display: flex;
      flex-direction: columns;
    }
</style>
