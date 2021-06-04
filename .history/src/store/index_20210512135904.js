import {createStore} from 'vuex'
import DetailModule from './modules/detail.js'

export default createStore({
  modules: {
    detail: DetailModule
  }
})