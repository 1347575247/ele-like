<template>
  <div class="shoppingCarWrapper">
    <!-- 购物车工具栏 -->
    <div class="shoppingCar flex">
      <div class="car_main flex">
        <div
          class="car_icon"
          :class="{ car_icon_ok: cartOk }"
          :style="{ animation: animateName }"
          @click="show = !show"
        >
          <b class="icon_count">{{ total }}</b>
          <i class="iconfont icon-gouwuche1"></i>
        </div>
        <div class="car_price">
          <div class="price_top">
            <p v-if="totalPrice.price >= basePrice">
              <!-- total.price -->
              <span class="price symbol">{{ totalPrice.price }}</span>
              <!-- total.price_origin -->
              <span class="origin_price symbol">{{
                totalPrice.origin_price
              }}</span>
            </p>
            <p class="price_bottom" v-else>还不够吃~</p>
          </div>
          <p>{{ rst.piecewise_agent_fee.description }}</p>
        </div>
      </div>
      <div class="car_submit">
        <div class="submit_base" v-if="basePrice >= totalPrice.price">
          还差{{ (basePrice - totalPrice.price).toFixed(1) }}元起送
        </div>
        <div class="submit_ok" v-else @click="toCheckout">去结算</div>
      </div>
    </div>
    <!-- 购物车列表 -->
    <!-- 购物车列表 -->
    <transition name="list" v-if="total > 0">
      <div class="shoppingCar_list" v-show="show" v-if="total >= 0">
        <p class="list_discountsMess">
          已减{{ (totalPrice.origin_price - totalPrice.price).toFixed(1) }}元
        </p>
        <div class="list_title flex">
          <div class="title_name">
            <span>已选商品</span>
          </div>
          <div class="title_clear" @click="clearFoods">
            <i class="iconfont icon-huishouzhan"></i>清空
          </div>
        </div>
        <div class="list_wrapper">
          <!-- 商品名称、单价、数量 -->
          <ul class="list_main" v-if="foods">
            <li v-for="(food, i) in foods" :key="i">
              <div class="main_desc t_ellipsis">
                <span class="desc_name">{{ food.name }}</span>
              </div>
              <div class="main_price">
                <span class="price_num symbol">
                  {{ food.price }}
                </span>
                <BaseButton :count="count(food.item)" @changeNum="changeNum(food.item, $event)"></BaseButton>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import cartModel from './js/cartModel'
import menuModel from '@views/mian/detail/children/menu/js/menuModel.js'
import BaseButton from '@comps/button/BaseButton.vue'

export default {
  props: {
    resId: Number,
  },
  components: {
    BaseButton
  },
  setup(props, ctx) {
    const {
      foodState,
      state,
      total,
      cartOk,
      animateName,
      rst,
      totalPrice,
      basePrice,
      show,
      foods,
      clearFoods,
      toCheckout
    } = cartModel(props)

    const { count, changeNum } = menuModel()

    return {
      foodState,
      foods,
      total,
      cartOk,
      animateName,
      rst,
      totalPrice,
      basePrice,
      count,
      changeNum,
      show,
      clearFoods,
      toCheckout
    }
  },
}
</script>
<style lang="scss">
@keyframes car {
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.list-enter-active, .list-leave-active {
  transition: 0.5s;
}

.list-enter-from, .list-leave-to {
  transform: translateY(100%);
}

.shoppingCarWrapper {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  .symbol::before {
    content: '￥';
  }
}
.shoppingCar {
  position: relative;
  z-index: 10;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;

  .car_main {
    .car_icon {
      position: relative;
      width: 1.493333rem;
      height: 1.493333rem; //56
      margin: -0.266666rem 0 0 0.533333rem; //10 20
      background-color: #363636;
      border: 0.16rem solid #444; //6
      line-height: 1.333333rem; //50
      color: #5f5f63;
      text-align: center;
      border-radius: 50%;
      animation: paused 0.5s;

      .icon_count {
        position: absolute;
        right: -0.133333rem;
        top: -0.133333rem; //5
        background-color: #f62571;
        color: #fff;
        padding: 0 0.186666rem; //7
        line-height: 0.586666rem; //22
        border-radius: 50px; //50
      }

      .icon-gouwuche1 {
        font-size: 0.933333rem; //35
      }
    }

    .car_icon_ok {
      color: #fff;
      background-color: #1fb3f0;
    }

    .car_price {
      margin-left: 0.266666rem; //10
      color: #999;
      font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;

      .price_top {
        height: 0.586666rem; //22
        margin-top: 0.426666rem; //16
      }

      .price_bottom {
        font-size: 0.373333rem; //16
      }

      .price {
        font-size: 0.48rem; //18
        color: #fff;
      }

      .origin_price {
        margin-left: 0.16rem; //6
        text-decoration: line-through;
      }
    }
  }

  .car_submit {
    width: 4.32rem; //162
    font-weight: 600;
    font-size: 0.48rem; //18
    line-height: 1.76rem; //66
    text-align: center;

    .submit_base {
      background-color: #777;
    }

    .submit_ok {
      background-color: #69f398;
    }
  }
}

.shoppingCar_list {
  position: absolute;
  left: 0;
  bottom: 100%;
  z-index: 5;
  width: 100%;
  background-color: #f3ebcd;

  .list_discountsMess {
    text-align: center;
    line-height: 2;
  }

  .list_title {
    justify-content: space-between;
    line-height: 1.493333rem; //56
    background-color: #eceff1;
    color: #666;

    .title_name {
      padding: 0 0.266666rem; //10
      font-size: 0.373333rem; //14
    }

    .title_clear {
      padding: 0 0.266666rem; //10
      font-size: 0.373333rem; //14

      .icon-huishouzhan {
        margin-right: 0.16rem;
        font-size: 110%;
      }
    }
  }

  .list_wrapper {
    max-height: 13.333333rem;
    overflow: auto;
    background-color: #fff;

    .list_main {
      li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f5f5f5;
        line-height: 60px;
        margin: 0 10px;

        .main_desc {
          .desc_name {
            font-size: 0.426666rem;
          }
        }

        .main_price {
          display: flex;
          align-items: center;

          .price_num {
            color: #f75858;
            font-weight: 600;
            margin-right: 0.266666rem;
            font-size: 0.426666rem;

            &::before {
              font-size: 70%;
            }
          }
        }
      }
    }
  }
}
</style>
