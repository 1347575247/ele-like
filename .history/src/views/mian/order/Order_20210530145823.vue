<template>
	<div class="order">
		<vHead title="订单"></vHead>
    <ul class="order-list">
      <router-link :to="{path: '/order/order-detail'}">
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
          <div class="operator">
            <van-button plain type="danger" size="small">评价得金币</van-button>
            <van-button plain type="primary" size="small">再来一单</van-button>
          </div>
        </li>
      </router-link>
      <router-link :to="{path: '/order/order-detail'}">
        <li class="item">
          <div class="shop flex">
            <img src="https://cube.elemecdn.com/0/cd/cf2e8ef58c435fb5002605881199fjpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed" alt="">
            <div class="shop-name">
              <a href="#" class="t_ellipsis">
                大润发(增城店)
              </a>
              <span class="iconfont">></span>
              <span class="delevery-sign">已送达</span>
              <p class="sm-font">2021-05-22 21:10</p>
            </div>
            
          </div>
          <div class="desc">
            <p class="detail">
              <span class="productname t_ellipsis">
              伊利巧乐兹香草巧克力口味脆筒雪糕73g*6
            </span>
              <span>等3件商品</span>
            </p>
            <p class="price">¥20.19</p>
          </div>
          <div class="operator">
            <van-button plain type="danger" size="small">评价得金币</van-button>
            <van-button plain type="primary" size="small">再来一单</van-button>
          </div>
        </li>
      </router-link>
      <router-link :to="{path: '/order/order-detail'}">
        <li class="item">
          <div class="shop flex">
            <img src="https://cube.elemecdn.com/e/e1/ea3f3779299cb9e2ca99dda336e58JPEG.JPEG" alt="">
            <div class="shop-name">
              <a href="#" class="t_ellipsis">
                一品烧腊猪脚饭
              </a>
              <span class="iconfont">></span>
              <span class="delevery-sign">已送达</span>
              <p class="sm-font">2021-05-23 11:10</p>
            </div>
            
          </div>
          <div class="desc">
            <p class="detail">
              <span class="productname t_ellipsis">   
              隆江猪脚饭十卤肉卷十荷包蛋十配菜饮品
            </span>
              <span>等2件商品</span>
            </p>
            <p class="price">¥13.10</p>
          </div>
          <div class="operator">
            <van-button plain type="danger" size="small">评价得金币</van-button>
            <van-button plain type="primary" size="small">再来一单</van-button>
          </div>
        </li>
      </router-link>
      <router-link :to="{path: '/order/order-detail'}">
        <li class="item">
        <div class="shop flex">
          <img src="https://cube.elemecdn.com/c/4c/45a01aa15046de87137a67ac851ccpng.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed" alt="">
          <div class="shop-name">
            <a href="#" class="t_ellipsis">
              陈记麻辣香锅(爱联店)
            </a>
            <span class="iconfont">></span>
            <span class="delevery-sign">已送达</span>
            <p class="sm-font">2021-05-23 11:10</p>
          </div>
          
        </div>
        <div class="desc">
          <p class="detail">
            <span class="productname t_ellipsis">             
            豆腐排
          </span>
            <span>等8件商品</span>
          </p>
          <p class="price">¥18.00</p>
        </div>
        <div class="operator">
          <van-button plain type="primary" size="small">再来一单</van-button>
        </div>
        </li>
      </router-link>
      <router-link :to="{path: '/order/order-detail'}">
        <li class="item">
        <div class="shop flex">
          <img src="https://cube.elemecdn.com/c/4c/45a01aa15046de87137a67ac851ccpng.png?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed" alt="">
          <div class="shop-name">
            <a href="#" class="t_ellipsis">
              陈记麻辣香锅(爱联店)
            </a>
            <span class="iconfont">></span>
            <span class="delevery-sign">已送达</span>
            <p class="sm-font">2021-05-23 11:10</p>
          </div>
          
        </div>
        <div class="desc">
          <p class="detail">
            <span class="productname t_ellipsis">             
            豆腐排
          </span>
            <span>等8件商品</span>
          </p>
          <p class="price">¥18.00</p>
        </div>
        <div class="operator">
          <van-button plain type="primary" size="small">再来一单</van-button>
        </div>
        </li>
      </router-link>
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
  a{
    text-decoration:none;
  }
  .order {
    background: #f5f4f4;
    height: 100%;
    position: fixed;
    width: 100%;
  }
  .order-list {
    >a:last-child {
      .item {
        padding-bottom: 2.105263rem;
      }
    }
    .item {
      height: 3.642105rem;
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

      .operator {
        button{
          float: right;
        }
        .van-button--danger {
          margin-left: 0.263158rem;
        }
        
      }
      
    }
  }
    
</style>
