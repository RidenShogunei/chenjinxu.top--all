import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import axios from './axios'
const app = createApp(App)
createApp(App).use(router).use(Antd).mount('#app')
app.config.globalProperties.$axios = axios
document.title = "二系统";
