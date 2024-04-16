import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import axios from './axios'
const app = createApp(App)
app.use(router).use(Antd).mount('#app')
app.config.globalProperties.$axios = axios
document.title = "二系统";
