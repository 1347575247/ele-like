<template>
  <div class="shoppingCarWrapper">
    <div class="shoppingCar flex">
      <div class="car_main flex">
        <div class="car_icon">
          <b class="icon_count">0</b> <i class="iconfont icon-gouwuche1"></i>
        </div>
        <div class="car_price">
          <div class="price_top">
            <p>
              <!-- count_all.price -->
              <span class="price symbol">11</span>
              <!-- count_all.price_origin -->
              <span class="origin_price symbol">22</span>
            </p>
            <p class="price_bottom">还不够吃~</p>
          </div>
          <!-- <p>{{rst.piecewise_agent_fee.description}}</p> -->
        </div>
      </div>
      <div class="car_submit">
        <div class="submit_base">还差20元起送</div>
        <!-- <div class="submit_ok" >去结算</div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import cartModel from './js/cartModel'

  export default {
    setup(props, ctx) {
      const {foodState, state} = cartModel(props)
    }
  }
</script>
<style lang="scss">
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
				color: #5F5F63;
				text-align: center;
				border-radius: 50%;
				animation: paused 0.5s;

				.icon_count {
					position: absolute;
					right: -0.133333rem;
					top: -0.133333rem; //5
					background-color: #F62571;
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
				background-color: #1FB3F0;
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
				background-color: #69F398;
			}
		}
	}

.shoppingCar_list {
  position: absolute;
  left: 0;
  bottom: 100%;
  z-index: 5;
  width: 100%;
  background-color: #F3EBCD;

  .list_discountsMess {
    text-align: center;
    line-height: 2;
  }

  .list_title {
    justify-content: space-between;
    line-height: 1.493333rem;//56
    background-color: #ECEFF1;
    color: #666;

    .title_name {
      padding: 0 0.266666rem;//10
      font-size: 0.373333rem;//14
    }

    .title_clear {
      padding: 0 0.266666rem;//10
      font-size: 0.373333rem;//14

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
            color: #F75858;
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
