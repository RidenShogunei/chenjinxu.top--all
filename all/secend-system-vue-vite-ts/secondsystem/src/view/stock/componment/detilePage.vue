<template>
<describePage :stock="senddata"></describePage>
    <br>
    <div class="detile">
        <div class="title">图表数据</div>
        <div id="pie-chart" ref="pieChart" style="width: 600px;height:400px;"></div>
        <div>买入卖出数据</div>
        <div id="line-chart" ref="lineChart" style="width: 600px;height:400px;"></div>
        <div>价格变化数据</div>
        <div id="bar-chart" ref="barChart" style="width: 600px;height:400px;"></div>
        <div>买卖数据</div>
    </div>
</template>

<script lang="ts" setup>
import describePage from "./describePgae.vue"
import * as echarts from 'echarts';
const pieChart = ref(null);
const lineChart = ref(null);
const barChart = ref(null);
const store = useStore();
const arrayData = computed(() => {
    if (store.state.stock) {
        console.log("切断的数据", store.state.stock.split("~"))
        return store.state.stock.split("~");
    } else {
        return [];
    }
})
let senddata = computed(() => ({
    name: arrayData.value[1],
    code : arrayData.value[2],
    transactionVolume:arrayData.value[6],
    foreignDisk:arrayData.value[7],
    innerDisk:arrayData.value[8],
    rise:arrayData.value[31],
    fall:arrayData.value[32],
    highest:arrayData.value[41],
    Status:arrayData.value[29],
    inquireTime: arrayData.value[30]
}));
let stockData = computed(() => ({
    stockname: arrayData.value[1],
    stockCode: arrayData.value[2],
    newestPrice: arrayData.value[3],
    yesterdayClose: arrayData.value[4],
    openPrice: arrayData.value[5],
    dealVolume: arrayData.value[6],
    buyVolume: arrayData.value[7],
    sellVolume: arrayData.value[8],
    buyOnePrice: arrayData.value[9],
    buyOneVolume: arrayData.value[10],
    buyTwoPrice: arrayData.value[11],
    buyTwoVolume: arrayData.value[12],
    sellOneVolume: arrayData.value[18],
    sellOnePrice: arrayData.value[19],
    sellTwoVolume: arrayData.value[20],
    sellTwoPrice: arrayData.value[21],
    buyThreePrice: arrayData.value[13],
    buyThreeVolume: arrayData.value[14],
    buyFourPrice: arrayData.value[15],
    buyFourVolume: arrayData.value[16],
    buyFivePrice: arrayData.value[17],
    buyFiveVolume: arrayData.value[18],
    currentTime: arrayData.value[30]
}));
watch(stockData, (newVal, oldVal) => {
    console.log('stockData has changed from', oldVal, 'to', newVal);
    render();
}, { deep: true });
const render = () => {
    const pieInstance = echarts.init(pieChart.value);
    pieInstance.setOption({
        tooltip: {
            trigger: 'item',
            position: function (pt: [number, number]) {
                return [pt[0], '10%'];
            },
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '交易量',
                type: 'pie',
                data: [
                    { value: stockData.value.buyVolume || 0, name: '买入' },
                    { value: stockData.value.sellVolume || 0, name: '卖出' }
                ]
            }
        ]
    });

    const barInstance = echarts.init(barChart.value);
    barInstance.setOption({
        tooltip: {
            trigger: 'axis',
            position: function (pt: [number, number]) {
                return [pt[0], '10%'];
            }
        },
        xAxis: {
            type: 'category',
            data: ['买一', '买二', '买三', '买四', '买五', '卖一', '卖二']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [stockData.value.buyOneVolume || 0, stockData.value.buyTwoVolume || 0,
            stockData.value.buyThreeVolume || 0, stockData.value.buyFourVolume || 0,
            stockData.value.buyFiveVolume || 0, stockData.value.sellOneVolume || 0,
            stockData.value.sellTwoVolume || 0,],
            type: 'bar'
        }]
    });

    const lineInstance = echarts.init(lineChart.value);
    lineInstance.setOption({
        tooltip: {
            trigger: 'axis',
            position: function (pt: [number, number]) {
                return [pt[0], '10%'];
            }
        },
        xAxis: {
            type: 'category',
            data: ['开盘价', '昨日收盘价', '当前价格'],
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [stockData.value.openPrice || 0, stockData.value.yesterdayClose || 0, stockData.value.newestPrice || 0],
            type: 'line'
        }]
    });
}

</script>

<style scoped>
.title {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 30px;
    text-align: center;
}
.detile{
    text-align: center;
    display:flex;
    justify-content: center;
    flex-direction: column;
}
</style>