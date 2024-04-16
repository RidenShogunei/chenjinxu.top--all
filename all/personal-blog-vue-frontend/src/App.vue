<template>
  <div id="app">
    <router-view/>
    <footer id="footer">
      <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">{{ ICP }}</a>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const ICP = ref('沪ICP备202405831号');
</script>

<style>
.app{
  display: flex;
}
#footer {
  position: fixed;
  font-style: italic;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #f8f9fa;
  padding: 10px 0;
}
</style>