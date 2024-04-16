<template>
    <div @click="test">nihao</div>
</template>

<script setup lang="ts">

import { loginApi } from '@/api/login';//导入请求方法
async function test() {
 	let loginMatch = {name:'张三',psd:'zs123456'};//请求参数
 	// 登录接口调用
 	let res: any = await loginApi(loginMatch);
 	console.log('请求返回的数据：',res)
}
</script>

<style scoped></style>