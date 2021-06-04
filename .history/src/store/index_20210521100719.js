import {createStore} from 'vuex'
import DetailModule from './modules/detail.js'
import ShoppingCar from './modules/shoppingcar'

export default createStore({
  modules: {
    detail: DetailModule,
    cart: ShoppingCar
  }
})