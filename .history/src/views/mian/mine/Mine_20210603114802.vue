<template>
<div>
  <div class="b-background"></div>
	<div class="mine">
		<div class="head" @click="$router.push('/mine/info')">
      <img src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_180,h_180,m_fixed" alt="">
      <div class="info">
        <p>{{hasLogin?'登录/注册':'314603bc2'}}</p>
        <span class="iconfont icon-phone1"></span>
        <span>{{hasLogin?'登录后享受更多特权':'132****2962'}}</span>
      </div>
      <span class="iconfont icon-right"></span>
    </div>
    <ul class="preferences">
      <li class="redpacks" @click="$router.push('/mine/redpack')">
        <div class="repack-info" v-if="hasLogin">
          <span class="iconfont icon-hongbao"></span>
        </div>
        <div class="repack-info" v-else>
          <span class="num">2</span>
          <span class="text">个</span>
        </div>
        <span class="text-2">红包</span>
      </li>
      <li class="coins" @click="$router.push('/mine/coins')">
        <div class="repack-info" v-if="hasLogin">
          <span class="iconfont icon-jinbi1"></span>
        </div>
        <div class="repack-info" v-else>
          <span class="num">4</span>
          <span class="text">个</span>
        </div>
        <span class="text-2">金币</span>
      </li>
    </ul>
    <div class="mine-item p-spacing mt" @click="toAddress">
      <span class="iconfont icon-dizhi left"></span>
      <span class="text">我的地址</span>
      <span class="iconfont icon-right"></span>
    </div>
    <div class="mine-item p-spacing mt">
      <span class="iconfont icon-gouwudai left"></span>
      <span class="text">金币商城</span>
      <span class="iconfont icon-right"></span>
    </div>
    <div class="mine-item p-spacing mt">
      <span class="iconfont icon-kefu left"></span>
      <span class="text">我的客服</span>
      <span class="iconfont icon-right"></span>
    </div>
    <div class="mine-item p-spacing">
      <span class="iconfont icon-elment left"></span>
      <span class="text">下载饿不饿APP</span>
      <span class="iconfont icon-right"></span>
    </div>
    <div class="mine-item p-spacing">
      <span class="iconfont icon-liebiao left"></span>
      <span class="text">规则中心</span>
      <span class="iconfont icon-right"></span>
    </div>

    <p class="secret-policy">隐私政策 Ⅱ</p>
		
	</div>
</div>
  
</template>

<script>
  import vHead from '@comps/header/Header.vue'
  import mineModel from './js/mineModel'
  import hasLogin from '@/utils/loginState'
	export default{
		components:{
			vHead
    },
    setup() {
      const {toAddress, hasLogin} = mineModel()
      
      return {
        toAddress,
        hasLogin
      }
    }
	}
</script>

<style lang="scss" scoped>
  .head {
    height: 3.157895rem; // 120
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display: flex;
    align-items: center;
    padding: 0 0.368421rem;
    color: #fff;
    position: relative;
    img {
      border-radius: 50%;
      width: 1.736842rem;
    }
    .info {
      margin-left: 0.394737rem;
      p {
        font-size: 0.521053rem;
        font-weight: 700;
      }
      span {
        display: inline-block;
        margin-top: 0.263158rem;
      }
    }
    .icon-right {
      position: absolute;
      right: 0.352632rem;
    }
  }
  .mine {
    position: relative;
    z-index: 2;
  }

  .preferences {
    display: flex;
    justify-content: space-around;
    padding: 0.526316rem 0;
    background-color: #fff;
    .redpacks,.coins {
      text-align: center;
      .num {
        color: rgb(255, 95, 62);
        font-size: 0.657895rem;
        font-weight: 700;
      }
      .text {
        color: rgb(255, 95, 62);
        display: inline-block;
        margin-left: 0.060947rem;    
      }
      .text-2 {
        margin-top: 0.210526rem;
        display: inline-block;
        font-weight: 600;
        color: #666;
        font-size: 0.368421rem;
      }
      .icon-hongbao {
        font-size: 0.526316rem;
        color: #ff5f3e;
      }
      .icon-jinbi1 {
        font-size: 0.526316rem;
        background-color: #6ac20b;
        padding: 0.131579rem;
        border-radius: 50%;
        color: #fff;
        border: none;
      }
      
    }
    .redpacks {
      .num {
        color: rgb(255, 95, 62);
      }
      .text {
        color: rgb(255, 95, 62);  
      }
    }
    .coins {
      .num {
        color: rgb(106, 194, 11);
      }
      .text {
        color:rgb(106, 194, 11);  
      }
    }
  }

  .mt {
    margin-top: 0.315789rem; // 12
  }
  // 我的页面  选项
  .mine-item {
    
    padding-top: 0.263158rem; // 10
    padding-bottom: 0.263158rem;
    background-color: #fff;
    >.left {
      font-size: 0.5rem;
      
      font-size: 0.578947rem;
    }
    >.text {
      font-size: 0.421053rem; // 16
      display: inline-block;
      margin-left: 0.210526rem; // 8
    }
    >.icon-right {
      float: right;
      margin-top: 0.052632rem;
      font-size: 0.473684rem;
      color: #bbb;
    }

    // 图标颜色
    .icon-dizhi,.icon-kefu,.icon-elment,.icon-liebiao {
      color: rgb(74, 165, 240);
    }
    .icon-elment {
      font-size: 0.483684rem;
    }
    .icon-gouwudai {
      color: rgb(148, 217, 74);
    }
  }

  .secret-policy {
    font-size: 0.394737rem; //15
    text-align: center;
    color:rgb(46, 173, 236);
    margin-top: 0.736842rem; //30
  }

  
</style>
