<template>
  <div class="search">
    <a-card class="card">
      <div class="title">星穹铁道数据查询</div>
      <br>
      <a-input-search v-model:value="value" placeholder="请输入您的uid" enter-button @search="onSearch" />
    </a-card>
    <div class="show">
      <roleShow></roleShow>
    </div>
    <div class="own">
      <ownShow></ownShow>
    </div>
    <div class="window">
      <windowShow></windowShow>
    </div>
  </div>
</template>

<script lang="js" setup>
import roleShow from "./component/roleShow.vue";
import windowShow from "./component/windowShow.vue"
import { starrailApi } from "../../api/statrole"
import ownShow from "./component/ownShow.vue"
const value = ref('');
const store = useStore();
const onSearch = () => {
  starrailApi(value.value).then(response => {
    // 处理响应
    console.log(response.playerDetailInfo);
    store.commit('setResponse', response.playerDetailInfo)
  }).catch(error => {
    // 错误处理
    console.log(error);
  });
}
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  width: 80%;
  margin-top: 1%;
}

.title {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
  text-align: center;
}

.show {
  width: 80%;
  /*方便查看元素实际位置*/
  margin-top: 1%;
}

.own {
  width: 80%;
  /*方便查看元素实际位置*/
  margin-top: 1%;
}

.window{
  width: 80%;
  /*方便查看元素实际位置*/
  margin-top: 1%;
}
</style>
