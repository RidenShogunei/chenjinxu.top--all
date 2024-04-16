<template>
  <div class="starrail">
    <a-card class="search">
      <div class="title">星穹铁道剧情文本搜索（初步阶段）</div>
      <div>
        <a-input-search class="search-input" v-model:value="value" placeholder="input search text" enter-button
          @search="onSearch" />
      </div>
    </a-card>
    <a-card class="respond">
      <a-list size="large" bordered :data-source="currentData">
        <template #renderItem="{ item }">
          <a-list-item>{{ item }}</a-list-item>
        </template>
      </a-list>
      <br />
      <a-pagination v-model:current="current" :total="totalPages" @change="onChange" show-less-items />
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { starrailApi } from "../../api/starrail.ts";
const value = ref<string>("");
const current = ref(1);
// 创建响应式数据
// 初始化参数为一个空对象
const params = ref({});
const itemsPerPage = ref(10);
const totalPages = ref(0);
const allData = ref<string[]>([]);
const currentData = computed(() => {
  // 计算当前页的数据开始和结束的索引
  const start = (current.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  // 从 allData 中取出对应的部分
  return allData.value.slice(start, end);
});
const callApi = async () => {
  // 定义一个表示 API 响应的接口
  interface ApiResponse {
    code: number;
    data: Array<any>;  // or whatever type the entries are
  }
  const response = await starrailApi(params.value) as ApiResponse;
  let take: Array<any> = response.data;
  console.log("页面拿到的数据", take);
  // 将 `take` 转为字符串数组
  let takeStrings: Array<string> = take.map((item) => item.text);

  if (
    Array.isArray(takeStrings) &&
    takeStrings.every((item) => typeof item === "string")
  ) {
    allData.value = takeStrings;
    totalPages.value = Math.ceil(takeStrings.length);
    console.log("总共"+totalPages.value)
  } else {
    console.error("API response is not a string array");
  }
};
const onChange = (page: number,pagesize :number) => {
  current.value = page;
  itemsPerPage.value=pagesize;
  console.log("页面大小"+pagesize);
};
const onSearch = (searchValue: string) => {
  // 更新 params 的值，加入了语言选择
  params.value = { search: searchValue };
  callApi();
};
</script>

<style scoped>
.starrail {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.search {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 80%;
  margin-top: 2%;
}

.title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  margin-bottom: 2%;
  text-align: center;
}

.search-input {
  margin-bottom: 1%;
  width: 300px;
}

.langSelect {
  width: 120px;
}

.respond {
  width: 80%;
  margin-top: 2%;
}
</style>