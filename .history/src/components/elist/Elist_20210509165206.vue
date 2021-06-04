<template>
  <div class="good-list">
    <div class="good-item" v-for="(item, i) in itemData" :key="i">
      <div class="img-box">
        <img
          :src="$formatImgSrc(item.restaurant.image_path)"
          alt=""
        />
      </div>
      <div class="desc">
        <div class="title-box">
          <h2>{{item.restaurant.name}}</h2>
          <div class="feedback">
            <span class="iconfont iconxuanzekuang"></span>
            <span>...</span>
          </div>
        </div>
        <div class="star-box">
          <van-rate v-model="item.restaurant.rating" allow-half readonly size=9 color="#ffd21e"/> 
          <span class="">{{"月售"+item.restaurant.recent_order_num+"单"}}</span>
        </div>
        <div class="discount-box">
          <h2 class="sm-font t_ellipsis">￥{{item.restaurant.float_minimum_order_amount}}起送 | 配送￥{{item.restaurant.float_delivery_fee}}</h2>
          <h3 class="sm-font">{{calDistance(item.restaurant.latitude, item.restaurant.longitude)}} | {{item.restaurant.order_lead_time}}分钟</h3>
        </div>
        <ul class="tag-list">
          <li class="cate sm-font" v-for="(tag, j) in item.restaurant.flavors" :key="j">
          {{tag.name}}
        </li>
        </ul>
        
        <div class="insurrance-box">
          <div class="insure-item">
            <span class="icon">保</span>
            <span class="sm-font t_ellipsis"
              >该商户食品安全已由国泰产险承担，食品安全有保障</span
            >

            <div class="activity-num">
              <span>2个活动</span>
              <span class="iconfont icon-xiala"></span>
          </div>
          </div>
          <div class="insure-item">
            <span class="icon">配</span>
            <span class="sm-font t_ellipsis">配送费立减3元</span>
          </div>
        </div>
      </div>
    </div>
    <slot>
      <p class="notice">加载中....</p>
      <p class="notice">没有更多了~</p>
    </slot>
    <div class="pad-for-bot"></div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watchEffect } from 'vue'
import { Rate, Icon } from 'vant'

export default {
  components: {
    [Rate.name]: Rate,
    [Icon.name]: Icon,
  },
  props: {
    elistData: {
      type: [Object],
    },
  },
  setup(props, context) {
    var data= reactive({
			   /* 当前用户所在位置 */
			   gps:{
				   latitude: 28.242478,//纬度
				   longitude: 112.946747//经度
         },
         st: 0, // scrollTop
         ct: 0, // clientHeight,
         itemData: [
      {
        "restaurant": {
          "activities": [
            {
              "attribute": "{\"40\": {\"1\": 22.0, \"0\": 0}, \"50\": {\"1\": 25.0, \"0\": 0}, \"60\": {\"1\": 28.0, \"0\": 0}, \"70\": {\"1\": 32.0, \"0\": 0}, \"30\": {\"1\": 18.0, \"0\": 0}}",
              "description": "满30减18，满40减22，满50减25，满60减28，满70减32",
              "icon_color": "f07373",
              "icon_name": "减",
              "id": 1314035697,
              "is_exclusive_with_food_activity": true,
              "name": "自营销复杂满减活动",
              "tips": "满30减18，满40减22，满50减25，满60减28，满70减32",
              "type": 102
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1378641409,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1376995913,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1376995921,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1376995905,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1376973945,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1376962713,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1376962705,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1376962697,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1376962689,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "attribute": "17.0",
              "description": "新用户下单立减17元",
              "icon_color": "70bc46",
              "icon_name": "首",
              "id": 1361043209,
              "is_exclusive_with_food_activity": true,
              "name": "新用户立减17元",
              "tips": "新用户下单立减17元",
              "type": 103
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1359721361,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1350328201,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1350309033,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1350289329,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1326995889,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "蒸系",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 397492273,
              "name": "蒸系",
              "tips": "蒸系"
            },
            {
              "description": "暖心好粥",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 397503553,
              "name": "暖心好粥",
              "tips": "暖心好粥"
            },
            {
              "description": "蒸系",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 397489577,
              "name": "蒸系",
              "tips": "蒸系"
            },
            {
              "description": "3.8特色点心",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 397480937,
              "name": "3.8特色点心",
              "tips": "3.8特色点心"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1240223905,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1240067161,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1240067169,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1240004649,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "单品定价",
              "icon_color": "f1884f",
              "icon_name": "特",
              "id": 1240000105,
              "name": "单品定价",
              "tips": "单品定价"
            },
            {
              "description": "超值换购",
              "icon_color": "f1884f",
              "icon_name": "换",
              "id": 1233217729,
              "name": "超值换购",
              "tips": "超值换购"
            },
            {
              "description": "超值换购",
              "icon_color": "f1884f",
              "icon_name": "换",
              "id": 1233214073,
              "name": "超值换购",
              "tips": "超值换购"
            },
            {
              "description": "超值换购",
              "icon_color": "f1884f",
              "icon_name": "换",
              "id": 1233208473,
              "name": "超值换购",
              "tips": "超值换购"
            }
          ],
          "address": "长沙市岳麓区咸嘉湖街道润泽园社区润泽园安置小区A18栋三单元一楼6号门面",
          "authentic_id": 1383347500223480,
          "description": "",
          "distance": 2764,
          "favored": false,
          "flavors": [
            {
              "id": 215,
              "name": "包子粥店"
            },
            {
              "id": 217,
              "name": "饺子馄饨"
            }
          ],
          "float_delivery_fee": 5.6,
          "float_minimum_order_amount": 10,
          "has_story": false,
          "id": 162958680,
          "image_path": "715c0a600cc677a23e2156eee9d3b71cpng",
          "is_new": false,
          "is_premium": true,
          "is_stock_empty": 0,
          "is_valid": 1,
          "latitude": 28.215309,
          "longitude": 112.925113,
          "max_applied_quantity_per_order": -1,
          "name": "粥可温(西湖店)",
          "next_business_time": "",
          "only_use_poi": false,
          "opening_hours": [
            "00:00/24:00"
          ],
          "order_lead_time": 33,
          "phone": "18153885015",
          "piecewise_agent_fee": {
            "description": "配送费¥5.6",
            "extra_fee": 0,
            "is_extra": false,
            "rules": [
              {
                "fee": 5.6,
                "price": 10
              }
            ],
            "tips": "夜间配送费¥5.6"
          },
          "platform": 0,
          "posters": [],
          "promotion_info": "愿有人与你立黄昏，有人问你粥可温。",
          "rating": 4.6,
          "rating_count": 0,
          "recent_order_num": 2530,
          "recommend": {
            "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
            "is_ad": false,
            "track": "{\"rankType\":\"3\"}"
          },
          "recommend_reasons": [
            {
              "name": "味道超赞"
            },
            {
              "name": "配送飞快"
            }
          ],
          "regular_customer_count": 0,
          "scheme": "eleme://catering?restaurant_id=162958680",
          "status": 1,
          "support_tags": [
            {
              "border": "dddddd",
              "color": "666666",
              "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
              "text": "包子粥店",
              "type": 1
            }
          ],
          "supports": [],
          "theme": {
            "default_color": "2395ff",
            "header_style": 0,
            "hongbao_style": 0,
            "price_color": "ff5339",
            "third_tab_name": "商家",
            "vanish_fields": []
          },
          "type": 0
        }
      },]
		})	
    const calDistance = (lat, lont) => {
      /* 获取用户的经纬度 */
      const _lat = data.gps.latitude,
            _lont= data.gps.longitude
      
      let x, y, z
      x = _lat - lat
      y = _lont - lont

      /* 计算用户与商家的距离 */
      z = Math.sqrt(x*x + y*y)

      /* 转化为公里 */
      return (z*100).toFixed(2) + 'km'
    }

    watchEffect(() => {
      data.itemData = props.elistData
      console.log(data.itemData)
    })

    const scrollFn = (e) => {
      data.st=_html.scrollTop || _body.scrollTop;
      data.st = Math.ceil(data.st)
      data.ct=_html.clientHeight || _body.clientHeight

      if(data.st + data.ct === _html.scrollHeight) {
        console.log("我滑到底部了")
      }
      console.log(data.st, data.ct, _html.scrollHeight)
    }
    
    const _html = document.documentElement
    const _body = document.body
    
    window.addEventListener('scroll', scrollFn, false)
    _html.addEventListener('scroll', scrollFn, false)
    _body.addEventListener('scroll', scrollFn, false)

    
    
    return {
      calDistance,
      ...toRefs(data)
    }
  },
}
</script>
<style lang="scss">
  .van-rate__icon--half {
    position: absolute;
  }
</style>
<style lang="scss" scoped>
.pad-for-bot {
  height: 1.473684rem;
}
.notice{
    text-align:center;
    line-height:0.746666rem;//28
}
.good-item {
  display: flex;
  height: 4.647368rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 0.605263rem;
  .img-box {
    height: 100%;
    width: 18.4%;
    img {
      width: 100%;
    }
  }
  .desc {
    width: auto;
    flex-grow: 1;
    padding: 0.131579rem 0 0 0.263158rem;
    .title-box {
      display: flex;
      justify-content: space-between;

      h2 {
        font-weight: bold;
        font-size: 0.394737rem;
      }

      // 反馈按钮
      .feedback {
        .iconxuanzekuang {
          font-size: 0.315789rem;
        }
        span {
          vertical-align: middle;
        }
        span:nth-child(2) {
          display: inline-block;
          margin-top: -0.252632rem;
        }
      }
    }
    // 星星区域
    .star-box {
      margin-top: 0.263158rem;
      span {
        margin-left: 0.157895rem;
        font-size: 0.293333rem;
        opacity: 0.6;
      }
    }
    .discount-box {
      width: 100%;
      position: relative;
      align-items: center;
      margin-top: 0.384737rem;
      h2 {
        display: inline-block;
        max-width: 3.947368rem;
      }
      h3 {
        display: inline-block;
        position: absolute;
        right: 0;
      }
    }
    .tag-list {
      display: flex;
      .cate {
        margin-top: 0.233158rem;
        padding: 0.052632rem 0.105263rem;

        font-size: 0.263158rem;
        border: 0.026316rem solid black;
        opacity: 0.3;
      }
    }
    
    .insurrance-box {
      margin-top: 0.326316rem;
      .insure-item {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:nth-child(2) {
          margin-top: 0.131579rem;
          .icon {
            background-color: lightgreen;
          }
        }
        .icon {
          display: inline-block;
          padding: 0.092632rem;
          color: #fff;
          background-color: rgb(102, 102, 102);
        }
        .sm-font {
          left: 0.826316rem;
          position: absolute;
          max-width: 4.842105rem;
        }
        .activity-num {
          opacity: 0.5;
        }
      }
    }
  }
}


</style>
