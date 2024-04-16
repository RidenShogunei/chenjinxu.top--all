import { message } from 'ant-design-vue';
import axios from 'axios';
import router from '@/router';

const newAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
});

newAxios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

newAxios.interceptors.response.use(
    response => {
        if (response.data['code'] === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        console.log(error.response);
        if (error.response.status) {
            let statusCode = error.response.data.code;
            switch (statusCode) {
                case 401:
                    setTimeout(() => {
                        message.warning(error.response.data.message)
                        router.push('/')
                    }, 1000)
                    break;
                // 请求错误
                case 400:
                    message.warning(error.response.data.message)
                    break;
                default:
                    message.error(errorCodeType(statusCode))
                    break;
            }
            return Promise.reject(error.response)
        }
    }
);

export default newAxios;