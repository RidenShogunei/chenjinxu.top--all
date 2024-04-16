<template>
    <div class="stock">
        <a-card class="search">
            <div class="title">股票信息查询</div>
            <br>
            <div>
                <a-row>
                    <a-col :span="6">
                        <a-cascader v-model:value="value" :options="options" placeholder="Please select" />
                    </a-col>
                    <a-col :span="16">
                        <a-input-search v-model:value="mycode" placeholder="输入股票代码" enter-button @search="onSearch" />
                    </a-col>
                </a-row>
            </div>
        </a-card>
        <br>
        <a-card class="detile">
            <detilePgae></detilePgae>
        </a-card>
    </div>
</template>

<script setup lang="ts">
import detilePgae from "./componment/detilePage.vue"
import { get } from "../../http/request"
import type { CascaderProps } from 'ant-design-vue';
const store = useStore();
const options: CascaderProps['options'] = [
    {
        value: 'sh',
        label: 'sh',
    },
    {
        value: 'sz',
        label: 'sz',
    },
];
const value = ref<string[]>([]);
const baseurl = 'http://qt.gtimg.cn/q='
const data = ref("")
const mycode = ref("")
const result = ref("")
// 获取数据的函数
const fetchData = async () => {
    const res = await get(`${baseurl}${result.value}`) as string;
    const dataText = res;
    data.value = dataText;
    console.log("拿到的股票数据", data.value);
    store.commit("updatestock", data.value);
};
const onSearch = () => {
    result.value = value.value + mycode.value;
    fetchData();
}

</script>

<style scoped>
.stock {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1%;
    flex-direction: column;

}

.title {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 30px;
    text-align: center;
}

.search {
    width: 60vw;
}
.detile{
    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1%;
    flex-direction: column;
}
</style>