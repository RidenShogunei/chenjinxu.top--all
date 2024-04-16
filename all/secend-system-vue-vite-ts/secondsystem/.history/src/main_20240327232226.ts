import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import axios from './axios'
createApp(App).use(router).use(Antd).mount('#app')
document.title = "二系统";
