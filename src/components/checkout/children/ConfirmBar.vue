<template>
	<!-- 工具条 -->
	<div class="tool-bar-warp">
		<ul class="tool-bar">
			<!-- grow_shrink 宽度平分 -->
			<li class="tool-bar-item grow_shrink">
        
        <div class="submit">
          提交订单
        </div>
        <div class="text">
          
          <div class="price">
            <span class="total">合计: </span>
            <span class="money-sign highlight">¥ </span>
            <span class="highlight">{{price}}</span>
            <br>
            <span class="money-sign highlight bottom-text">已优惠¥{{discount}}</span>
          </div>
        </div>
			</li>
		</ul>
	</div>
</template>

<script>
	import {reactive,toRefs} from 'vue'
	export default{
    /* composition API */
    props: {
      price: Number,
      discount: Number
    },
		setup(){

			// 要在template中使用 setup中的属性，需要return出去
			return{
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.tool-bar-warp{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
    .tool-bar{
			background-color: #fff;
			.tool-bar-item{
				text-align: center;
				padding: 0.133333rem 0; //5
				font-size: 0.373333rem; //14
        .text {
          float: right;
          .price {
            text-align:end;
            margin-top: 0.105263rem;
            display: inline-block;
            vertical-align: middle;
            font-size: 0.631579rem;
            .total,.money-sign {
              font-size: 0.315789rem;
            }
            .highlight {
              color:#ff5128; 
            }
            .bottom-text {
              vertical-align: top;
              margin-top: 0.078947rem;
              display: inline-block;
            }
          }
        }
				

        .submit {
          float: right;
          width: 3rem;
          height: 1.052632rem;
          background: #01b6fd;
          color: #fff;
          font-size:0.426316rem;
          font-weight: 700;
          text-align: center;
          line-height: 1.052632rem;
          margin-left: 0.263158rem;
          border-radius: 0.526316rem;
          margin-top: 0.105263rem;
          margin-right: 0.394737rem;
        }
      }
    }
	}
</style>
