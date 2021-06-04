<template>
	<div class="order">
		<vHead title="订单"></vHead>
    <ul class="order-list">
      <li class="item">
        <div class="shop flex">
          <img src="https://cube.elemecdn.com/7/8A/E9FB1546E45D995C2B50269E765D1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" alt="">
          <div class="shop-name">
            <a href="#" class="t_ellipsis">
              华润万家（增城挂绿店）
            </a>
            <span class="iconfont">></span>
            <span class="delevery-sign">已送达</span>
            <p class="sm-font">2021-05-22 21:10</p>
          </div>
          
        </div>
        <div class="desc">
          <p class="detail">
            <span class="productname t_ellipsis">现切果盘(哈密瓜+红肉火龙果)/盒400g</span>
            <span>等4件商品</span>
          </p>
          <p class="price">¥30.80</p>
        </div>
        <div class="operator pink">
          <van-button plain type="primary">再来一单</van-button>
          <van-button plain type="danger">评价得金币</van-button>
        </div>
      </li>
    </ul>
		
	</div>
</template>

<script>
  import vHead from '@comps/header/Header.vue'
  import {Button} from 'vant'
	export default{
		components:{
      vHead,
      [Button.name]: Button,
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
      height: 3.142105rem;
      margin: 0.263158rem 0;
      padding: 0.4rem;
      background: #fff;
      display: flex;
      flex-direction:column;
      justify-content: space-between;
      
      .shop {
        position: relative;
        
        img {
          width: 0.921053rem;
        }
        .shop-name {
          width: 100%;
          a{
            display: inline-block;
            font-size:0.421053rem;
            font-weight:600;
            position: relative;
            top: 0.078947rem;
            left: 0.131579rem;
            max-width: 3.421053rem;
            margin-right: 0.431579rem;
            height: 0.429474rem;
          }
          p {
            position: relative;
            top: 0.108947rem;
            left: 0.131579rem;
            color: #ccc;
          }
          .iconfont {
            vertical-align: middle;
            font-size: 0.315789rem;
            color: #ccc;
          }
          &::after {
            content: "";
            height: 0.026316rem;
            width: 100%;
            background-color: #f5f5f5;
            display: block;
            position: relative;
            top: 0.308947rem;
          }
          .delevery-sign {
            position: absolute;
            right: 0.4rem;
            top: 0.5rem;
            
          }
        }
        

      }
      
      .desc {
        position: relative;
        display:flex;
        .detail {
          .productname {
            display: inline-block;
            max-width: 3.421053rem;
            vertical-align:middle;
            margin-left: 1.0474rem;
          }
        }
        .price {
          position: absolute;
          right: 0;
          font-weight: 700;
        }
      }
    }
</style>
