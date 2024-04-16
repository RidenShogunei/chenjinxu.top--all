<template>
  <div class="diary">
    <el-card class="data">
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">写留言</el-menu-item>
        <el-menu-item index="2">搜留言</el-menu-item>
        <el-menu-item index="3">所有留言</el-menu-item>
      </el-menu>
      <div class="write" v-if="index === '1'">
        <el-input v-model="textarea" style="width: 100%" :rows="10" type="textarea" placeholder="Please input" />
        <el-button style="margin-top: 2%" type="primary" @click="submit">提交</el-button>
      </div>
      <div class="search" v-else-if="index === '2'">
        <el-date-picker v-model="time" type="date" placeholder="Pick a day" :disabled-date="disabledDate"
          :shortcuts="shortcuts" :size="size" style="margin-bottom: 2%" />
        <el-input v-model="searchline" style="width: 100%" :rows="2" type="textarea" placeholder="Please input" />
        <el-button style="margin-top: 2%; margin-bottom: 2%" type="primary" @click="search">搜索</el-button>
        <div>结果：</div>
        <el-table :data="searchresult" style="width: 100%" @row-click="rowHandleClick">
          <el-table-column prop="time" label="Date" width="180" />
          <el-table-column prop="data" label="Brief" :formatter="briefFormatter" />
        </el-table>
        <el-dialog v-model="dialogVisible" title="data" width="500" @click="dialogVisible = false">
          <div class="chose">
            <p>Date: {{ chosenRow.time }}</p>
            <p>data: {{ chosenRow.data }}</p>
          </div>
        </el-dialog>
      </div>
      <div class="show" v-else-if="index === '3'">
        <el-table :data="searchresult" style="width: 100%; margin-top: 3%" @row-click="rowHandleClick">
          <el-table-column prop="time" label="Date" width="180" />
          <el-table-column prop="data" label="Brief" :formatter="briefFormatter" />
        </el-table>
        <el-dialog v-model="dialogVisible" title="data" width="500" @click="dialogVisible = false">
          <div class="chose">
            <p>Date: {{ chosenRow.time }}</p>
            <p>data: {{ chosenRow.data }}</p>
          </div>
        </el-dialog>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";
// 定义状态变量
let chosenRow = ref({});
const activeIndex = ref("1");
const index = ref("1");
const textarea = ref("");
const searchline = ref("");
let searchresult = ref([]);
const time = ref("");
const dialogVisible = ref(false);

// 批量加载数据
const loadData = () => {
  axios
    .post("https://chenjinxu.top:3000/diary/search", {
      time: time.value,
      data: searchline.value,
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
  searchline.value="";
  if (newVal === "3") {
    loadData();
  } else {
    time.value = "";
    searchresult.value = "";
  }
});
const search = () => {
  console.log(time.value)
  axios
    .post("https://chenjinxu.top:3000/diary/search", {
      time: time.value,
      data: searchline.value,
    })
    .then((response) => (searchresult.value = response.data))
    .catch(console.log);
};
// 定义短期内时间的快捷选项
const shortcuts = ["Today", "Yesterday", "A week ago"].map((text, i) => {
  const value = new Date();
  value.setDate(value.getDate() - i);
  return { text, value };
});

// 处理被点击行的行为，将其设为选中行并打开对话窗口
const rowHandleClick = (row) => {
  chosenRow.value = row;
  dialogVisible.value = true;
};

// 禁止选择未来的日期
const disabledDate = (time) => time.getTime() > Date.now();

// 标签选择处理函数，改变激活标签对应的变量值 'index'
const handleSelect = (val) => (index.value = val);

// 提交留言
const submit = () => {
  const data = textarea.value;
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = String(currentTime.getMonth() + 1).padStart(2, '0');
  const day = String(currentTime.getDate()).padStart(2, '0');
  const time = `${year}-${month}-${day}`;
  axios.post("https://chenjinxu.top:3000/diary/submit", { data, time }).then(() => {
    textarea.value = "";
    alert("提交成功")

  }).catch(console.log);

};

// 格式化呈现文本，超长文本用 '...' 表示
const briefFormatter = (row) =>
  row.data?.slice(0, 10) + (row.data.length > 10 ? "..." : "");
</script>

<style scoped>
.diary {
  background-image: url("../assets/diary.jpg");
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
