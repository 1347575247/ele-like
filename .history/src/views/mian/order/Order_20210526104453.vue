<template>
	<div class="order">
		<vHead title="订单"></vHead>
    <ul class="order-list">
      <li class="item">
        <div class="shop flex">
          <img src="https://cube.elemecdn.com/7/8A/E9FB1546E45D995C2B50269E765D1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
          <div class="shop-name">
            <a href="#">
              华润万家（增城挂绿店）
            </a>
            <p class="sm-font">2021-05-22 21:10</p>
          </div>
          
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
      
      .shop {
        padding: 0.4rem;
        img {
          width: 0.921053rem;
        }
        .shop-name {
          a{
            font-size:0.421053rem;
            font-weight:600;
            position: relative;
            top: 0.078947rem;
            left: 5px;
          }
          p {
            position: relative;
            top: 0.108947rem;
            left: 5px;
            color: #ccc;
          }
        }
      }
    }
</style>
