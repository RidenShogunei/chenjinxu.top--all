<template>
  <a-card class="com">
    <a-descriptions title="人物信息">
      <a-descriptions-item label="昵称">{{ data.nickname }}</a-descriptions-item>
      <a-descriptions-item label="UID">{{ data.uid }}</a-descriptions-item>
      <a-descriptions-item label="世界等级">{{ data.worldLevel }}</a-descriptions-item>
      <a-descriptions-item label="签名">{{ data.signature }}</a-descriptions-item>
      <a-descriptions-item label="等级">
        {{ data.level }}
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<script lang="ts" setup>
const store = useStore();
const data = computed(() => {
  if (store.state.response && typeof store.state.response === 'object') {
    return store.state.response;
  } else {
    return {
      nickname: "exampleUser",
      roleID: "123456",
      worldLevel: 30,
      signature: "hello",
      uid: "123456",
      level:"70",
    };
  }
});
</script>

<style scoped>
.com{
  background-color: rgba(55, 85, 34, 0.5);
}
</style>