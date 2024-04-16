/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue';
import 'element-plus/dist/index.css'
import axios from 'axios';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(Antd);
app.config.globalProperties.$axios = axios;
app.provide('baseUrl', 'https://chenjinxu.top:3000');
app.mount('#app');
document.title = "陈同学的实验站";