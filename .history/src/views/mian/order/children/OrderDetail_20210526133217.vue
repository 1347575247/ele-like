<template>
	<div class="order-detail">
		<vHead title="订单已送达">
      <template v-slot:right>
        <div class="right">
          <span class="iconfont icon-kefu"></span>
        </div>
      </template>
    </vHead>

    <div class="main">
      <p class="order-state">订单已送达
        <span class="iconfont icon-right"></span>
      </p>

      <div class="aftet-sell">
        <div class="safety p-spacing">
          <span class="iconfont icon-dunpai"></span>
        </div>
      </div>
      
    </div>
    
		
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
    background-image: linear-gradient(
      180deg
      , rgb(41, 202, 255) 0%, transparent 100%);
      position: fixed;
      bottom: 10.526316rem;
      top: 0;
      right: 0;
      left: 0;

      .main {
        padding: 0.394737rem 0.293158rem;
        .order-state {
          font-size: 0.626316rem;
          font-weight: 600;
          color: white;
          span {
            font-weight: 300;
            color: #fafafa;
            opacity: .7;
          }
        }
        .aftet-sell {
          padding-top: 3px;
          background-color:#fff;
          overflow: hidden;
          border-radius: 0.203158rem;
        }
      }
    
    
  }
  .header {
    background: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%) no-repeat;
    .title {
      font-weight: 700;
    }
  }
</style>
