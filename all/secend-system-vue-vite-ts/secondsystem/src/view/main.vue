<template>
  <div class="main">
    <a-layout>
      <a-layout-header class="headerStyle">
        <HeaderPart></HeaderPart>
      </a-layout-header>

      <a-layout>
        <a-layout-sider class="siderStyle">
          <MenuPart></MenuPart>
        </a-layout-sider>
        <a-layout-content class="contentStyle">
          <component :is="dynamicComponent"></component>
        </a-layout-content>
      </a-layout>

      <a-layout-footer class="footerStyle">
        <FooterPart></FooterPart>
      </a-layout-footer>

    </a-layout>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
// 在 setup 函数中使用 Vuex 的 store
const store = useStore();
const dynamicComponent = computed(() => {
  switch (store.state.page) {
    case '1':
      return defineAsyncComponent(() => import('../view/genshin/genshinSearh.vue'))
    case '2':
      return defineAsyncComponent(() => import('../view/starrail/starrailSearch.vue'))
    case '3':
      return defineAsyncComponent(() => import('../view/starrailrole/index.vue'))
    case '4':
      return defineAsyncComponent(() => import('../view/stock/index.vue'))
    default:
      return defineAsyncComponent(() => import('../components/waitPage.vue'))
  }
})
</script>

<style scoped>
.siderStyle,
.contentStyle {
  min-height: 100vh;
  /* 100% of the viewport height */
}

.main {
  /* 将 div.main 设为全屏 */
  height: 100%;
  /* 100% viewport height */
  width: 100%;
  /* 100% viewport width */
  display: flex;
  flex-direction: column;
}
</style>