<template>
  <div class="detail" v-if="rst">
    <!-- 头部 -->
    <div class="detail_header" :style="{backgroundImage: `url(${$formatImgSrc(rst.shop_sign.image_hash)})`}">
      <button class="header_btn">&lt;</button>
      <div class="header_logo"><img :src="$formatImgSrc(rst.image_path)" alt="" /></div>
    </div>
    <!-- 描述部分 start-->
    <div class="detail_desc">
      <!-- 店铺名 -->
      <h2 class="desc_title">{{rst.name}}</h2>
      <!-- 评价、月售、配送约 -->
      <div class="desc_evaluate">
        <span>评价{{rst.rating}}分</span> <span>月售{{rst.rating_count}}单</span> <span>配送约{{rst.order_lead_time}}分钟</span>
      </div>
      <!-- 优惠劵 -->
      <div class="desc_coupon">
        <div class="coupon_main">
          <div class="coupon_item flex type0" v-for="(item, i) in redpack" :key="i">
            <span class="mian_value">￥{{item.value}}</span>
            <span class="mian_detail">{{item.title}}</span>
            <span class="mian_btn">领取</span>
          </div>
        </div>
      </div>
      <!-- 活动 -->
      <div class="desc_activity">
        <div class="activity_main flex">
          <ActivityList :activities="[rst.activities[0]]"></ActivityList>
          <div class="activity_more flex_shrink">
            共26个优惠<i class="iconfont icon-xiala"></i>
          </div>
        </div>
      </div>
      <!-- 公告 -->
      <div class="desc_notice t_ellipsis">
        <van-notice-bar
          left-icon="volume-o"
          text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
        />
      </div>
    </div>
    <!-- 描述部分 end-->
    <!-- 主体内容 -->
    <div class="detail_main">
      <!-- 导航 -->
      <nav class="main_nav flex" v-fixed ref="detail_nav">  
        <div class="nav_item">点餐</div>
      </nav>
            
    </div>
  </div>
</template>

<script>
import detailModel from './js/detail.js'
import ActivityList from '@comps/activitylist/ActivityList.vue'
import { NoticeBar } from 'vant'

export default {
  components: {
    ActivityList,
    [NoticeBar.name]:NoticeBar
  },
  setup(props, ctx) {
    const { rst, redpack } = detailModel()
    return {
      rst,
      redpack
    }
  },
}
</script>

<style lang="scss">
	.detail {

		/* 商家头部 */
		.detail_header {
			position: relative;
			height: 3.6rem; //135
			margin-bottom: 0.4rem; //15
			background: no-repeat center/cover;

			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				z-index: 5;
				width: 100%;
				height: 100%;
				background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
			}

			.header_btn {
				position: absolute;
				left: 0;
				top: 0;
				z-index: 10;
				font-size: 0.8rem; //30
				font-family: SimHei;
				width: 1.333333rem;
				height: 1.333333rem; //50
				color: #fff;
			}

			.header_logo {
				position: absolute;
				left: 0;
				right: 0;
				z-index: 10;
				bottom: -0.4rem; //15
				width: 2.4rem;
				height: 2.4rem; //90
				margin: auto;
				border: 1px solid #ddd;

				img {
					width: 100%;
					height: 100%;
				}

			}

		}

		// 商家描述
		.detail_desc {
			padding-top: 0.533333rem; //20
			.desc_title {
				font-size: 0.533333rem; //20
				font-weight: 600;
				text-align: center;

				&::after {
					content: '';
					display: inline-block;
					vertical-align: middle;
					width: 0;
					height: 0;
					margin-left: 0.16rem; //6
					border: 8px solid transparent;
					border-left-color: #000;
				}
			}

			/* 商家名称 */
			.title_detail {
				position: fixed;
				bottom: 0;
				z-index: 100;
				margin: auto;
				width: 9.6rem; //400
				height: 9.6rem; //360
				background-color: #fff;
				border-radius: 0.16rem; //6

				.desc_title {
					margin-top: 0.533333rem; //20
				}

				.btn {
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0.266666rem; //10
					width: 1.066666rem; //40
					height: 1.066666rem; //40
					margin: auto;
					background-color: rgba(0, 0, 0, 0.5);
					color: #fff;
					border-radius: 50%;
					font-size: 0.8rem; //30
				}
			}

			.desc_evaluate {
				margin: 0.266666rem 0; //10
				text-align: center;

				span {
					margin: 0 0.266666rem; //10
					color: '#666';
				}
			}

			/* 优惠券 */
			.desc_coupon {
				margin: 0.266666rem; //10

				.coupon_main {
					text-align: center;

					.coupon_item {
						position: relative;
						display: inline-flex;
						width: 4.4rem; //165
						height: 0.906666rem; //34
						margin: 0 0.08rem; //3
						line-height: 0.906666rem; //34
						font-size: 0.373333rem; //14
						align-items: center;

						&::before,
						&::after {
							content: '';
							position: absolute;
							width: 0.053333rem; //2
							height: 0;
							right: 1.173333rem; //44
							border: 0.106666rem solid transparent; //4
						}

						&::before {
							top: 0;
							border-top-color: #fff;
						}

						&::after {
							bottom: 0;
							border-bottom-color: #fff;
						}

						span {
							color: #845454;
						}

						.mian_value {
							margin-left: 0.533333rem; //20
							color: #6D6C29;
							font-size: 0.373333rem; //14

							&::before {
								font-size: 0.373333rem; //14
								content: '￥';
							}
						}

						.mian_detail {
							width: 2.266666rem; //85
							overflow: hidden;
						}

						.mian_btn {
							position: absolute;
							right: 0.266666rem; //10
						}
					}

					.type0 {
						background-color: rgb(255, 244, 244);
					}
				}

				.coupon_detail {
					height: 8rem; //300
				}
			}

			/* 活动 */
			.desc_activity {
				margin-bottom: 0.266666rem; //10

				.activity_main {
					width: 6.933333rem; //260
					margin: 0 auto;
          justify-content: space-between;
          

					.activity_more {
						margin-left: 0.266666rem; //10
            margin-top: 0.501053rem;
					}
				}

				.activity_detail {
					overflow: auto;

					button {
						position: absolute;
						top: 0.4rem; //15
						right: 0.266666rem; //10
						font-size: 0.4rem; //15
					}

					.detail_list {
						padding: 0 0.266666rem; //10
						overflow: hidden;
					}
				}
			}

			.desc_notice {
				text-align: center;
				font-size: 0.426666rem; //18

				.van-icon {
					position: relative;
				}
			}
		}

		/* 优惠券 */
		.detail_slide {
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 100;
			width: 100%;
			height: 10.133333rem; //380
			background-color: #fff;

			.detail_title {
				margin: 0.266666rem 0; //10
				font-size: 0.533333rem; //20
				font-weight: 700;
				text-align: center;
			}

			.van-icon {
				position: absolute;
			}
		}
			/* 主体内容 */
		.detail_main{
		  a{
			  text-decoration: none;
		  }
		  .main_nav{
			background-color:#fff;
			border-bottom:1px solid #ddd;
			.nav_item{
			  text-align:center;
			  flex-grow:1;
			  a{
				display:inline-block;
				line-height:1.333333rem;//50
				font-size:0.426666rem;//16
				color:#777;
				border-bottom:2px solid transparent;
				&.router-link-active{
				  color:#333;
				  font-weight:700;
				  border-bottom-color:#FF6969;
				}
		      }
		    }
		  }
		}
	}
</style>