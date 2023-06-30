import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入全局指令
import { lazyPlugin } from '@/directives'
//引入全局组件
import { componentsPlugin } from '@/components'
//初始化样式文件
import '@/styles/common.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugin)
app.mount('#app')
