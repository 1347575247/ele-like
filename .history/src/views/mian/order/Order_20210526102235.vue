<template>
	<div class="order">
		<vHead title="订单"></vHead>
    <ul class="order-list">
      <li class="item pink">
        a
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
    background: #ccc;
    height: 100%;
  }
    .item {
      height: 4.342105rem;
      margin: 0.263158rem 0;
    }
</style>
