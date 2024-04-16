<template>
    <div class="person">
        <el-card class="data">
            <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">写文章</el-menu-item>
                <el-menu-item index="2">所有文章</el-menu-item>
            </el-menu>
            <div class="write" v-if="index === '1'">
                <el-input v-model="title" style="width: 100%" :rows="1" type="textarea" placeholder="title" />
                <br>
                <!-- 在这里添加你的选择框 -->
                <el-checkbox v-model="show" label="是否公开"></el-checkbox>
                <br>
                <el-input v-model="textarea" style="width: 100%" :rows="10" type="textarea"
                    placeholder="Please input" />
                <el-button style="margin-top: 2%" type="primary" @click="submit">提交</el-button>
            </div>
            <div class="show" v-else-if="index === '2'">
                <el-table :data="searchresult" style="width: 100%; margin-top: 3%" @row-click="rowHandleClick">
                    <el-table-column prop="time" label="Date" width="180" />
                    <el-table-column prop="title" label="Title" />
                    <!--更改prop为“title”和label为“Title”，并假设你有一个名为titleFormatter的方法可以格式化标题 -->
                </el-table>
                <el-dialog v-model="dialogVisible" title="正文" width="80%" @click="dialogVisible = false">
                    <div class="chose">
                        <p style="text-align: left; font-size: small;">Date: {{ chosenRow.time }}</p>
                        <h4 style="text-align: center; font-size: large;">{{ chosenRow.title }}</h4>
                        <p style="text-align: center; font-size: small;">{{ chosenRow.content }}</p>
                    </div>
                </el-dialog>
            </div>
        </el-card>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";
import { inject } from 'vue'
const baseUrl = inject('baseUrl')
const show = ref("false");
// 定义状态变量
let chosenRow = ref({});
const activeIndex = ref("1");
const index = ref("1");
const textarea = ref("");
const title = ref("");
const searchline = ref("");
let searchresult = ref([]);
const time = ref("");
const dialogVisible = ref(false);

// 批量加载数据
const loadData = () => {
    axios
        .post(`${baseUrl}/person/get`, {
            time: time.value,
            data: searchline.value,
            showornot: ""
        })
        .then((response) => {
            console.log("返回数据", response.data)
            searchresult.value = response.data
        })
        .catch(console.log);
};

// 监听'index'变化，当其值为 "3"时加载数据
watch(index, (newVal) => {
    time.value = "";
    searchline.value = "";
    if (newVal === "2") {
        loadData();
    } else {
        time.value = "";
        searchresult.value = "";
    }
});


// 处理被点击行的行为，将其设为选中行并打开对话窗口
const rowHandleClick = (row) => {
    chosenRow.value = row;
    dialogVisible.value = true;
};


// 标签选择处理函数，改变激活标签对应的变量值 'index'
const handleSelect = (val) => (index.value = val);

// 提交文章
const submit = () => {
    const data = textarea.value;
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    const month = String(currentTime.getMonth() + 1).padStart(2, '0');
    const day = String(currentTime.getDate()).padStart(2, '0');
    const time = `${year}-${month}-${day}`;
    const mytitle = title.value;
    const showornot = show.value;
    axios.post(`${baseUrl}/person/submit`, { data, time, mytitle, showornot }).then(() => {
        textarea.value = "";
        title.value = "";
        alert("提交成功")

    }).catch(console.log);

};

</script>

<style scoped>
.person {
    background-image: url("../../assets/personal.jpg");
    position: fix;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* 使用 flexbox 将内容居中 */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.data {
    width: 60%;
    height: 60%;
    background-color: rgba(255, 255, 255, 0.5);
    overflow-y: scroll;
}

.write {
    width: 100%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
}

.search {
    width: 100%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
}
</style>