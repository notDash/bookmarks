
import { createApp } from 'vue'
// import App from '../App.vue'
import type { App } from 'vue';

import { createI18n } from 'vue-i18n'
import messages from './index'


// const app = createApp(App)
const locale = localStorage.getItem('lang')
console.log('locale:>> ', locale)

const i18n = createI18n({
  legacy: false,
  locale: locale || "English", // 注意locale属性！
  messages
})

export default function (app: App<Element>) {
  app.use(i18n)
}