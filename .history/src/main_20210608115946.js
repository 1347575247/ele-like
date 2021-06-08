import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from './http/config.js'
import formatImgSrc from './plugin/fomatImgSrc.js'
import vFixed from './plugin/fixedDireactive.js'
import store from './store'
import autoTop from './plugin/autoTop'
// import '@/assets/public.css'
import initDatas from '@/utils/initDatas'

// 初始化数据
initDatas()

/* vue2.0 挂载到实例上 */
// Vue.prototype.$axios=axios
// 全局配置 
const app=createApp(App)
/* vue3.0通过globalProperties 进行挂载 axios*/
app.config.globalProperties.$axios=axios
app.config.globalProperties.$formatImgSrc=formatImgSrc
app.config.globalProperties.$autoTop=autoTop
app.config.globalProperties.$router=router
app.use(router)
app.use(store)
// 注册全局自定义指令 v-fixed
app.directive('fixed',vFixed)

app.mount('#app')



