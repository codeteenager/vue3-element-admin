import { createApp } from 'vue'
// 加载全局样式
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlus from './plugins/element-plus'

createApp(App)
  .use(router)
  .use(store)
  .use(elementPlus)
  .mount('#app')
