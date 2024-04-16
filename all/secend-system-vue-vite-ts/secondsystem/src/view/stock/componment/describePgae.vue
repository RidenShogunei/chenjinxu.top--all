<template>
    <a-descriptions title="股票信息" bordered>
        <a-descriptions-item label="名字">{{ stock.name }}</a-descriptions-item>
        <a-descriptions-item label="股票代码">{{ stock.code }}</a-descriptions-item>
        <a-descriptions-item label="成交量">{{ stock.transactionVolume }}</a-descriptions-item>
        <a-descriptions-item label="外盘">{{ stock.foreignDisk }}</a-descriptions-item>
        <a-descriptions-item label="内盘" :span="2">{{ stock.innerDisk }}</a-descriptions-item>
        <a-descriptions-item label="状态" :span="3">
            <div v-if="stock.Status">
                股票在交易
            </div>
            <div v-else>
                股票已关闭
            </div>
        </a-descriptions-item>
        <a-descriptions-item label="涨幅">{{ stock.rise }}</a-descriptions-item>
        <a-descriptions-item label="跌幅">{{ stock.fall }}</a-descriptions-item>
        <a-descriptions-item label="最高">{{ stock.highest }}</a-descriptions-item>
        <a-descriptions-item label="数据最新时间"> {{ formatDateString(stock.inquireTime) }}</a-descriptions-item>
    </a-descriptions>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
    stock: {
        name: string,
        code: string,
        transactionVolume: string,
        foreignDisk: string,
        innerDisk: string,
        Status: string,
        rise: string,
        fall: string,
        highest: string,
        inquireTime: string
    }
}>(), {})

const { stock } = toRefs(props)
function formatDateString(dateString: string | null | undefined) {
  if (typeof dateString === 'string' && dateString.length >= 14) {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    const hour = dateString.slice(8, 10);
    const minute = dateString.slice(10, 12);
    const second = dateString.slice(12,14);
    return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
  } else {
    console.error('Invalid dateString: ', dateString);
    return 'Invalid date';
  }
}
</script>