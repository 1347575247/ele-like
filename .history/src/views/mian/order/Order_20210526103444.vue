<template>
	<div class="order">
		<vHead title="订单"></vHead>
    <ul class="order-list">
      <li class="item">
        <div class="shop pink">
          <img src="https://cube.elemecdn.com/7/8A/E9FB1546E45D995C2B50269E765D1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
        </div>
        <div class="desc">b</div>
        <div class="operator pink">c</div>
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

<style lang="scss" scoped="scoped">
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
      flex-direction:column;
      justify-content: space-between;
      
      // a
      .shop {
        padding: 0.5rem;
      }
    }
</style>
