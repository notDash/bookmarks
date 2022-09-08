import { createApp } from 'vue'
import App from './App.vue'
// import * as echarts from 'echarts' //区别在这里
// Vue.prototype.$echarts = echarts

import { setupStore } from './store/index'
import I18N from './i18n/i18n'


let app
function render() {
  app = createApp(App)
  app.use(setupStore)
  app.use(I18N)
  app.mount('#popup')
}
render()