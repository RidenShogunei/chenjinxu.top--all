import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import store from './store' 
import * as echarts from 'echarts'
const app = createApp(App)
app.config.globalProperties.$echarts = echarts
app.use(router).use(store).use(Antd).mount('#app')
document.title = "二系统";
