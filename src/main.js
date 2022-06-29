import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/styles.scss'
import './iconfont/iconfont.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import installIcons from './icons/index.js'

import './permission'

const app = createApp(App)
installIcons(app)

console.log(process.env.VUE_APP_BASE_API)

app.use(store).use(router).use(ElementPlus).mount('#app')
