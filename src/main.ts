import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import Vant from 'vant'
import 'vant/lib/index.css'
import { colorOverall } from '@/config/common'

import router from '@/router'
import store from '@/store'
import App from '@/App.vue'

const app = createApp(App)

app.config.globalProperties.$color = colorOverall
app.provide('$color', colorOverall)

app.use(router).use(store).use(Vant).use(ElementPlus)

app.mount('#app')
