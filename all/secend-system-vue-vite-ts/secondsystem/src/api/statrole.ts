import {get} from '../http/request';//引入post、get方法

/**
* (params: any):接收到请求参数，并进行数据约束
* post('/login', params)：
* /login:请求接口
* params：请求参数
*/
export const starrailApi = (uid: string) => get(`https://avocado.wiki/v1/info/${uid}`);

