import Vue from 'vue'
import App from './App.vue'
import router from './router'
// *指令相关
import Directives from './directives'
import 'view-design/dist/styles/iview.css'

Vue.use(Directives)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
